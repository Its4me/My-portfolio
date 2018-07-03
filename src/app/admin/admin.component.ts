import { MainService } from './../main.service';

import { Component, OnInit } from '@angular/core';


import { Navigation } from './navigation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private main: MainService) { }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  ngOnInit() {
  }


  nav = [
    new Navigation('Main','main'),
    new Navigation('Blog','blog'),
    new Navigation('About','about'),
  ]

}
