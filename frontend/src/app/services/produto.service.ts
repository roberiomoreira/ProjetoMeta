import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto.model';
import { HELP_DESK_API } from './helpdesk.api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtoAlt: any;
  constructor(
    private http: HttpClient
  ) { }

  findAll(){
    return this.http.get(`${HELP_DESK_API}/produtos`);
  }

  findById(id: string){
    return this.http.get<Produto>(`${HELP_DESK_API}/produtos/${id}`);
  }

  createOrUpdate(produto: Produto){
    if (produto.id != null && produto.id != '') {
      this.produtoAlt = JSON.stringify(produto);
      console.log(this.produtoAlt);
      return this.http.put<Produto>(`${HELP_DESK_API}/produtos/${produto.id}`, this.produtoAlt);
      /*
      , {
        headers: new HttpHeaders({
          'Content-Type': 'aplication/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4ZmFwYTMyQG91dGxvb2suY29tIiwiZXhwIjoxNjMwMzY4Nzg4fQ._EE6bSEV3VOK1eCOJGCZyptHs9TMGsoijNNfiET-ClBsl6XUFSWZ30k_BDHUAhO0hdgC_rlUyohuSLUL1ANdPg'
        })
      });*/
    } else {
      produto.id = null;
      return this.http.post(`${HELP_DESK_API}/produtos`,produto);
    }

  }
}
