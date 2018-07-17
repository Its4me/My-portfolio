import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-u-about',
  templateUrl: './u-about.component.html',
  styleUrls: ['./u-about.component.scss']
})
export class UAboutComponent implements OnInit {

  constructor(public main: MainService) { }

  ngOnInit() {
  }

}
