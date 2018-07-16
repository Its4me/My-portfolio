import { Post } from './../../user/u-blog/post';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-a-blog',
  templateUrl: './a-blog.component.html',
  styleUrls: ['./a-blog.component.scss']
})
export class ABlogComponent implements OnInit {

  addNewPost: boolean = false;



  constructor(private main: MainService) { }

  ngOnInit() {
  }

  _togglePost(){
    this.addNewPost = (this.addNewPost)? false : true;
  }

  post: Post = {
    header: '',
    imgSrc: '',
    text: ''
  }

  _addPost(){
    if(this.post.header != '' && this.post.imgSrc != '' && this.post.text != ''){
      let month: any = new Date().getMonth() + 1;
      let number: any = new Date().getDate();
      if(month < 10){
        month = '0' + month;
      }
      if(number < 10){
        number = '0' + number;
      }
          
      let date =  number +'.' + month +  '.' + new Date().getFullYear();
      let time = new Date().getHours() + ':' +  new Date().getMinutes();
      
      this.post.date = date;
      this.post.time = time;

      this.main.post.push(this.post);
      this.main.addPost();
    }
    this.post ={
      header: '',
      imgSrc: '',
      text: ''
    }

    
  }
  _savePost(i){
    this.main.savePost(i);
  }

  _deletePost(i){
    this.main.post.splice(i,1);
    this.main.deletePost(i);
  }
}
