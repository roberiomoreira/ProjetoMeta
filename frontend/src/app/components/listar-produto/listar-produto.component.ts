import { ProdutoService } from 'src/app/services/produto.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ResponseApi } from 'src/app/model/response-api';
import { DialogService } from './../../dialog.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto.model';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css'],
  preserveWhitespaces: true
})
export class ListarProdutoComponent implements OnInit {

  page: number = 1;
  count: number = 10;
  pages: Array<number>;
  shared: SharedService;
  message: {};
  classCss: {};
  listProduto: Produto[];

  constructor(
    private dialogService: DialogService,
    private produtoService: ProdutoService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    //this.shared = SharedService.getInstence();
    if (this.authenticationService.currentUserValue) {
      //this.authenticationService.logout();
      this.router.navigate(['/']);
    }
   }

  ngOnInit(): void {
    this.produtoService.findAll().subscribe((produtos: Produto[]) => {
      //this.loading = false;
      this.listProduto = produtos;
  });
  }

  findAll(){
    //RESPONSE API É UTILIZADO PARA UMA LISTA DE DADOS.
    //CASO QUEIRA RETORNAR SOMENTE 1 DADO É NECESSÁRIO NO LUGAR DE
    //RESPONSE API COLOCAR O OBJETO QUE NECESSITA RETORNAR
    this.produtoService.findAll().subscribe((responseApi: ResponseApi) => {
      this.listProduto = responseApi['data'];
      //this.pages = new Array(responseApi['data']['totalPages']);
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }


  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert' : true
    }
    this.classCss['alert-'+type] = true
  }

  edit(id: string){
    this.router.navigate(['/editar-produto',id]);
  }

  loginComponent(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
