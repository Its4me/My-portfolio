import { MainService } from '../../../main.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  @ViewChild('scrollImg') scrollImg: ElementRef;
  scroll = 3;




  @HostListener("window:scroll", [])
  onWindowScroll() {

    if(document.documentElement.clientWidth >=  768){
      this.scrollImg.nativeElement.style.transform =  'translateY('+ window.pageYOffset/this.scroll + 'px)';
    }else{
      this.scrollImg.nativeElement.style.transform =  'translateY('+ 0 + 'px)';
    }

  }
  constructor(private main: MainService) { }

  ngOnInit() {
  }


  _scrollToElement(){
    let y = document.getElementById("about").offsetTop;
    let currentY = window.scrollY;
    let timePeriod = 10;
    let scrollPeriod = 5;
  
    let intervallId = setInterval(function(){
      if(y != currentY){
        window.scrollTo(0, currentY += scrollPeriod);
      }
      if(currentY >= y){
        window.scrollTo(0, y);
        clearInterval(intervallId);
      }
       

    },timePeriod)
    
  } 
} 
