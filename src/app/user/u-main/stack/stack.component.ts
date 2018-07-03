import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {



  constructor(private main: MainService) { }

  ngOnInit() {
 
  }

}
