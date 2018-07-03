import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {


  h2: any[];
  colorThem = 0;

  constructor(private main: MainService) { }

  ngOnInit() {
    
  }
  
}
