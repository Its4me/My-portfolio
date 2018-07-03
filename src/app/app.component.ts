import { MainService } from './main.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  constructor(private main: MainService){}

  ngOnInit(): void {
    this.main.h2Get();
    this.main.aboutGet();
    this.main.worksGet();
    this.main.stackGet();
  }
}
