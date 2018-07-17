import { Stack } from './../../user/u-main/stack/stack';
import { Works } from './../../user/u-main/works/works';
import { Component, OnInit } from '@angular/core';


import { MainService } from './../../main.service';
import { animations } from '../../animations';




@Component({
  selector: 'app-a-main',
  templateUrl: './a-main.component.html',
  styleUrls: ['./a-main.component.scss'],

  animations: [ animations ]

})
export class AMainComponent implements OnInit {

  addNewWorking = false;
  addNewStack = false;

  constructor(public main: MainService) { }
  
  stack: Stack = {
    imgSrc: '',
    name: '',
    description: ''
  };
  works: Works = {
    description: '',
    src: '',
    imgSrc: ''
  };

  ngOnInit() {}


  _toggleWork(){
    this.addNewWorking = (this.addNewWorking)? false : true;
  }


  _toggleStack(){
    this.addNewStack = (this.addNewStack)? false : true;
  }


  _addWork(){
    if(this.works.description != '' && this.works.imgSrc != '' && this.works.src != ''){
      this.main.works.push(this.works);
      this.main.addWork();
    }
    this.works = {
      description: '',
      src: '',
      imgSrc: ''
    };

    this._toggleWork();
  }



  _addStack(){
    if(this.stack.description != '' && this.stack.imgSrc != '' && this.stack.name != ''){
      this.main.stack.push(this.stack);
      this.main.addStack();
    }
    this.stack ={
      imgSrc: '',
      name: '',
      description: ''
    }
    this._toggleStack();
  }


  _deleteStack(id){

    this.main.stack.splice(id,1);
    this.main.deleteStack(id);
  }
  _saveStack(i){
    this.main.saveStack(i);
  }
  _saveWork(i){
    this.main.saveWork(i);
  }

  _deleteWork(id){
    this.main.works.splice(id,1);
    this.main.deleteWork(id);
  }


  _saveH2(id){
    this.main.saveH2(id);
  }

  _saveAll(){
    this.main.savaAll();
  }
  
  _saveAbout(){
    this.main.saveAbout();
  }
  
}
