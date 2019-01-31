import { Component, OnInit } from '@angular/core';
import{ItemService} from "../item.service"
import{Item}from "../item"
import { HttpClient,HttpClientModule }    from '@angular/common/http';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
  message: Item
  constructor(private itemService :ItemService) { }
  items: Item[]=[]
  ngOnInit() {
    this.items= this.itemService.list
   }
   affiche(){
     console.log (this.items[0].content)
   }




}
