import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  myEventNew: any;
  myEventOld: any = {
    url: ''
  };
  constructor(private main: MainService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      this.myEventNew = event;
      if(this.myEventNew.url && this.myEventOld && this.myEventNew.url != this.myEventOld.url) {
        this.myEventOld = this.myEventNew; 
        this.checkFooter();
      }
      
  });
  }

  ngOnInit() {
  }
  checkFooter(){
    let screen = document.documentElement.clientHeight;
    let footerHeight = 51;
    document.getElementById('content').style.minHeight = screen - footerHeight + 'px';
   
   
    
    
  }

}

