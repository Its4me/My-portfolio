import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Stack } from './user/u-main/stack/stack';
import { Works } from './user/u-main/works/works';

import { map } from 'rxjs/operators';


export const url = 'https://api.mlab.com/api/1/databases/mywebsite/collections';
export const apiKey = 'apiKey=PzU6VEOEPeGE1wajcsQQKP2YcRvES-Qj';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MainService {


  colorThem: number = 0;
  h2;
  aboutMeText;
  works: Works[] = [];
  stack: Stack[] = [];

  constructor(private http: HttpClient) { }


  h2Get(){
    this.h2 = this.http.get(url + '/h2?' + apiKey).subscribe(h2Object => {
      this.h2 = h2Object;
      for (let i = 0; i < 3; i++){
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

  
  savaAll(){
    // h2 save
    let json: Object[] = [];
    for (let i = 0; i < 3; i++) { 
      json[i] = { "_id": i, "value": this.h2[i]} ; 
    }
    this.http.put(url + '/h2?' + apiKey , json ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err),
      () => this.h2Get()
    ); 
    
    // about text save
    
    this.http.put(url + '/aboutMe?' + apiKey , {"_id":0, "value": this.aboutMeText} ,httpOptions)
    .subscribe(
      res => JSON.stringify(res),
      err => console.error(err),
      () => this.aboutGet()
    ); 
    



  }
  
}