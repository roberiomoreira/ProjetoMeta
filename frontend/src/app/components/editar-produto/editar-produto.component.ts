import { Observable } from 'rxjs';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { SharedService } from 'src/app/services/shared.service';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  produto: Produto;
  shared: SharedService;
  message : {};
  classCss : {};
  results$: Observable<any>;
  idProduto: any;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.shared = SharedService.getInstence();
   }

  ngOnInit(): void {
    let id : string = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.produto = this.findById(id);
    }
  }

  findById(id: any){
    this.produtoService.findById(id).subscribe(data => {
      this.produto = data;
    }), (err: { [x: string]: { [x: string]: any[]; }; }) => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    }
    return this.produto;
  }

  getFromGroupClass(isInvalid: boolean, isDirty: any): {} {
    return {
      'form-group' : true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    }
  }

  cadastrar(form: any){
    console.log(form);
    console.log(this.produto);
    this.message = {};
    this.produtoService.createOrUpdate(this.produto).subscribe(data => {
      this.produto = new Produto();
      let produtoRet : any =  data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `${produtoRet.nome} cadastrado com sucesso`
      });
      }, err => {
        this.showMessage({
          type: 'error',
          text: "Cadastro não realizado!"
      });
    });
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
      this.router.navigate(['/']);
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert' : true
    }
    this.classCss['alert-'+type] = true
  }

  cancelar(){
    this.message = undefined;
    this.router.navigate(['/']);
  }

}
