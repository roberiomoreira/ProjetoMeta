import { AppComponent } from './../app.component';

import { UserModel } from './../model/user.model';
import { Injectable, Output, EventEmitter, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = null;
  user: UserModel;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstence(){
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn(): boolean{
    if (this.user == null) {
      return false;
    }
    return this.user.username != '';
  }
}
