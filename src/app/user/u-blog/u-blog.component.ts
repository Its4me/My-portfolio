import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-u-blog',
  templateUrl: './u-blog.component.html',
  styleUrls: ['./u-blog.component.scss']
})
export class UBlogComponent implements OnInit {

  constructor(private main: MainService) { }

  ngOnInit() {
  }

}
