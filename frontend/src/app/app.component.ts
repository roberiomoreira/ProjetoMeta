import { SharedService } from 'src/app/services/shared.service';

import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showTemplate: boolean = false;
  public shared: SharedService;

  constructor(){
    this.shared = SharedService.getInstence();
  }

  ngOnInit(){
    this.shared.showTemplate.subscribe(
      (      show: boolean) => this.showTemplate = show
    );
  }

  showContentWrapper(){
    return {
      'content-wrapper' : this.shared.isLoggedIn()
    }
  }
}
