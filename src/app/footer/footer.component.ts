import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  constructor(private main: MainService) { }

  
  ngOnInit() {
  }

}
