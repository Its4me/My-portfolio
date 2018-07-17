import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {




  constructor(public main: MainService) { }

  ngOnInit() {
  }

}
