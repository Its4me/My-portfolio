
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './user/u-blog/post';
import { Stack } from './user/u-main/stack/stack';
import { Works } from './user/u-main/works/works';




export const url = 'https://api.mlab.com/api/1/databases/mywebsite/collections';
export const apiKey = 'apiKey=PzU6VEOEPeGE1wajcsQQKP2YcRvES-Qj';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MainService {

  post: Post[] = [];
  colorThem: number = 0;
  h2;
  aboutMeText;
  works: Works[] = [];
  stack: Stack[] = [];
  aboutSite;
  root = false;

  constructor(private http: HttpClient) { }


  h2Get(){
    this.h2 = this.http.get(url + '/h2?' + apiKey).subscribe(h2Object => {
      this.h2 = h2Object;
      for (let i = 0; i < 5; i++){
        this.h2[i] = this.h2[i].value;
      } 
      
    },
    err => console.error(err)
    );
  }

  aboutGet(){
    this.aboutMeText = this.http.get(url + '/aboutMe/0?' + apiKey).subscribe(
      text => {
        this.aboutMeText = text;
        this.aboutMeText = this.aboutMeText.value;      
      } 
    ),
    err => console.error(err)
  }

  worksGet(){
    this.http.get(url + '/myWorks?' + apiKey).subscribe(
      obj =>{
        let i = 0;
        while(obj[i]){
          this.works[i] = {
            description: obj[i].description,
            src: obj[i].src,
            imgSrc: obj[i].imgSrc
          }
          i++;
        }
      }
    )
  }

  stackGet(){
    this.http.get(url + '/stack?' + apiKey).subscribe(
      obj => {
        let i = 0;
        while(obj[i]){
          this.stack[i] = {
            description: obj[i].description,
            name: obj[i].name,
            imgSrc: obj[i].imgSrc
          }
          i++;
        }
      }
    )
  }

  
  aboutSiteGet(){
    this.http.get(url + '/aboutSite/0?' + apiKey).subscribe(
      obj => {
        this.aboutSite = obj;
        this.aboutSite = this.aboutSite.value;
      },
      err => console.error(err)
    )
  }


  savaAll(){
    if(this.checkPass()){return;}
    // h2 save
    let json: Object[] = [];
    for (let i = 0; i < 3; i++) { 
      json[i] = { "_id": i, "value": this.h2[i]} ; 
    }
    this.http.put(url + '/h2?' + apiKey , json ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err),  
    ); 
    
    // about text save
    
    this.http.put(url + '/aboutMe/0?' + apiKey , {"value": this.aboutMeText} ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err),
    ); 


    // stack save
    let timeStack = [];
    for (let i = 0; i < this.stack.length; i++) {
      timeStack[i] = {
        _id : i.toString(),
        description: this.stack[i].description,
        name: this.stack[i].name,
        imgSrc: this.stack[i].imgSrc
      };
      
    }

    this.http.put(url + '/stack?' + apiKey,timeStack, httpOptions).subscribe(
      res => JSON.stringify(res),
      err => console.error(err)
    )

    // works save
    let timeWork = [];
    for (let i = 0; i < this.works.length; i++) {
      timeWork[i] = {
        _id : i.toString(),
        imgSrc: this.works[i].imgSrc,
        description: this.works[i].description,
        src: this.works[i].src
      }

    }
    
    this.http.put(url + '/myWorks?' + apiKey, timeWork ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err)
    )
  }


  addStack(){
    if(this.checkPass()){return;}
    let id = this.stack.length - 1;
    let newStack = {
      _id: id.toString(),
      imgSrc: this.stack[id].imgSrc,
      name: this.stack[id].name,
      description: this.stack[id].description
    }
    this.http.post(url + '/stack?' + apiKey, newStack ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err)
    )
  }
  deleteStack(id){
    if(this.checkPass()){return;}
    let timeStack = [];
    let timeI = 0;
    this.http.get(url + '/stack?' + apiKey).subscribe(
      obj => {
        let i = 0;
        while(obj[i]){
          if(i == id){
            timeI = 1;
          }
          if(obj[i + timeI] == undefined){
            break;
          }
          timeStack[i] = {
            _id : i.toString(),
            description: obj[i + timeI].description,
            name: obj[i + timeI].name,
            imgSrc: obj[i + timeI].imgSrc
          };

          i++;
        }
      },
      err => console.error(err),
      () => {
        this.http.put(url + '/stack?' + apiKey, timeStack ,httpOptions)
        .subscribe(
          res => JSON.stringify(res)
        );
        
      })    
  }


  addWork(){
    if(this.checkPass()){return;}
    let id = this.works.length - 1;
    let newWorks = {
      _id: id.toString(),
      imgSrc: this.works[id].imgSrc,
      description: this.works[id].description,
      src: this.works[id].src
    }
    this.http.post(url + '/myWorks?' + apiKey, newWorks ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err)
    )
  }


  deleteWork(id){
    if(this.checkPass()){return;}
    let timeWork = [];
    let timeI = 0;
    this.http.get(url + '/myWorks?' + apiKey).subscribe(
      obj => {
        let i = 0;
        while(obj[i]){
          if(i == id){
            timeI = 1;
          }
          if(obj[i + timeI] == undefined){
            break;
          }
          timeWork[i] = {
            _id : i.toString(),
            imgSrc: obj[i + timeI].imgSrc,
            description: obj[i + timeI].description,
            src: obj[i + timeI].src
          };
          i++;
        }
      },
      err => console.error(err),
      () => {
        this.http.put(url + '/myWorks?' + apiKey, timeWork ,httpOptions)
        .subscribe(
          res => JSON.stringify(res)
        );
        
      })    
  }

  saveH2(id){
    if(this.checkPass()){return;}
    this.http.put(url + '/h2/' + id + '?' + apiKey, {value: this.h2[id]}, httpOptions).subscribe(
      res => JSON.stringify(res),
      err => console.error(err)
      
    )
  }


  saveAbout(){
    if(this.checkPass()){return;}
    this.http.put(url + '/aboutMe/0?' + apiKey, {value: this.aboutMeText} ,httpOptions).subscribe(
      res => JSON.stringify(res),
      err => console.error(err) 
    )
  }
  saveAboutSite(){
    if(this.checkPass()){return;}
    this.http.put(url + '/aboutSite/0?' + apiKey, {value: this.aboutSite} ,httpOptions).subscribe(
      res => JSON.stringify(res),
      err => console.error(err) 
    )
  }
  addPost(){
    if(this.checkPass()){return;}
    let id = this.post.length - 1;


    let newPost = {
      _id: id.toString(),
      header: this.post[id].header,
      imgSrc: this.post[id].imgSrc,
      text: this.post[id].text,
      date: this.post[id].date,
      time: this.post[id].time
      
    }
    this.http.post(url + '/posts?' + apiKey, newPost ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err)
    )
  }

  postsGet(){
    this.http.get(url + '/posts?' + apiKey).subscribe(
      obj => {
        let i = 0;
        while(obj[i]){
          this.post[i] = {
            header: obj[i].header,
            imgSrc: obj[i].imgSrc,
            text: obj[i].text,
            date: obj[i].date,
            time: obj[i].time
          }
          i++;
        }
      }
    )
  }
  deletePost(id){
    if(this.checkPass()){return;}
    let timePost = [];
    let timeI = 0;
    this.http.get(url + '/posts?' + apiKey).subscribe(
      obj => {
        let i = 0;
        while(obj[i]){
          if(i == id){
            timeI = 1;
          }
          if(obj[i + timeI] == undefined){
            break;
          }
          timePost[i] = {
            _id : i.toString(),
            header: obj[i + timeI].header,
            imgSrc: obj[i + timeI].imgSrc,
            text: obj[i + timeI].text,
            date:  obj[i + timeI].date,
            time:  obj[i + timeI].time
          };
          i++;
        }
      },
      err => console.error(err),
      () => {
        console.log(timePost);
        this.http.put(url + '/posts?' + apiKey, timePost ,httpOptions)
        .subscribe(
          res => JSON.stringify(res)
        );
      });  
    }
    savePost(i){
      if(this.checkPass()){return;}
      this.http.put(url + '/posts/' + i + '?' + apiKey, this.post[i] ,httpOptions).subscribe(
        res => JSON.stringify(res)
      );
    }
    saveStack(i){
      if(this.checkPass()){return;}
      this.http.put(url + '/stack/' + i + '?' + apiKey, this.stack[i] ,httpOptions).subscribe(
        res => JSON.stringify(res)
      );
    }
    saveWork(i){
      if(this.checkPass()){return;}
      this.http.put(url + '/myWorks/' + i + '?' + apiKey, this.works[i] ,httpOptions).subscribe(
        res => JSON.stringify(res)
      );
    }
    enterPass(root){
      this.root = root;   
    }
    private checkPass(){
      return !this.root;
    }
}