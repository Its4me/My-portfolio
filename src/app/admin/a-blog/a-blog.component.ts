import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-a-blog',
  templateUrl: './a-blog.component.html',
  styleUrls: ['./a-blog.component.scss']
})
export class ABlogComponent implements OnInit {

  constructor(private main: MainService) { }

  ngOnInit() {
  }

}
