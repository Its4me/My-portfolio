import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// custom

import { MainService } from '../../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private main: MainService,
              private route: Router 
            ) { }
  
  activeNow: number;

  ngOnInit()  {
      switch(this.route.url){
        case '/main': this.nav[0] = true;
                  break;
        case '/main/blog': this.nav[1] = true;
                  break;
        case '/main/about': this.nav[2] = true;
                  break;
      }
  
  }
  
  colorTheme: number = 0;

  nav = []; 


  //functions
  _changeActiveUrl(i){
    switch(i){
      case 0: this.nav[1] = false;
              this.nav[2] = false;
              this.nav[0] = true;
              break;
      case 1: this.nav[0] = false;
              this.nav[2] = false;
              this.nav[1] = true;
              break;
      case 2: this.nav[0] = false;
              this.nav[1] = false;
              this.nav[2] = true;
              break;
    }
  }
}
