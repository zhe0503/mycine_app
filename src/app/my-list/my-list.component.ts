import { Component, OnInit } from '@angular/core';
import {Item}from "../item"
import{ItemService} from "../item.service"
import { Router } from '@angular/router';
import {UserService} from "../user.service";


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  newFilmName: String =""
  newContent: String =""
  newNote:number
  newItem: Item
  constructor(private itemService :ItemService ) { }

  ngOnInit() {
  }

  addItem(){
    this.itemService.list.push({
     
      filmTitle:this.newFilmName,
      content : this.newContent,
      note: this.newNote
  })
  }

}
