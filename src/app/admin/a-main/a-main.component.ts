import { Component, OnInit } from '@angular/core';

import { MainService } from './../../main.service';


@Component({
  selector: 'app-a-main',
  templateUrl: './a-main.component.html',
  styleUrls: ['./a-main.component.scss']
})
export class AMainComponent implements OnInit {

  constructor(private main: MainService) { }

  

  ngOnInit() {}


  _saveAll(){
    this.main.savaAll();
  }
}
