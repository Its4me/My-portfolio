import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-a-about',
  templateUrl: './a-about.component.html',
  styleUrls: ['./a-about.component.scss']
})
export class AAboutComponent implements OnInit {

  constructor(private main: MainService) { }

  ngOnInit() {
  }
  _saveAbout(){
    this.main.saveAboutSite();
  }
  _deletePost(id){
    this.main.post.splice(id,1);
    this.main.deletePost(id);
  }
}
