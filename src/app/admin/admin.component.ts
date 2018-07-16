import { Router } from '@angular/router';
import { MainService } from './../main.service';

import { Component, OnInit } from '@angular/core';


import { Navigation } from './navigation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  password: string = '0045';
  enterPassword = '';
  constructor(private main: MainService,
              private route: Router
  ) { }


  ngOnInit() {
    switch(this.route.url){
      case '/admin/main': this.nav[0].active = true;
                break;
      case '/admin/blog': this.nav[1].active = true;
                break;
      case '/admin/about': this.nav[2].active = true;
                break;
    }
  }


  nav = [
    new Navigation('Main','main',false),
    new Navigation('Blog','blog',false),
    new Navigation('About','about',false),
  ];


  _changeActiveUrl(i){
    switch(i){
      case 0: this.nav[1].active = false;
              this.nav[2].active = false;
              this.nav[0].active = true;
              break;
      case 1: this.nav[0].active = false;
              this.nav[2].active = false;
              this.nav[1].active = true;
              break;
      case 2: this.nav[0].active = false;
              this.nav[1].active = false;
              this.nav[2].active = true;
              break;
    }
  }

  _enterPass(){
    this.main.enterPass(this.password == this.enterPassword); 
    this.enterPassword = '';
  }
  _logout(){
    this.main.root = false;
  }

}
