import { HELP_DESK_API } from './helpdesk.api';
import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  login(user: UserModel){
    return this.http.post(`${HELP_DESK_API}/api/auth`, user);
  }

  createOrUpdate(user: UserModel){
    if (user.id != null && user.id != '') {
      return this.http.put(`${HELP_DESK_API}/api/users`,user);
    } else {
      user.id = null;
      return this.http.post(`${HELP_DESK_API}/api/users`,user);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${HELP_DESK_API}/api/users/${page}/${count}`);
  }

  findById(id: string){
    return this.http.get(`${HELP_DESK_API}/api/users/${id}`);
  }

  delete(id: string){
    return this.http.delete(`${HELP_DESK_API}/api/users/${id}`);
  }
}
