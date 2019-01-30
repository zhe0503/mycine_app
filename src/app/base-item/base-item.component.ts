import { Component, OnInit ,Input} from '@angular/core';
import{Item}from "../item"

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',
  styleUrls: ['./base-item.component.css']
})
export class BaseItemComponent implements OnInit {
  @Input() item :Item
  constructor() { }

  ngOnInit() {
  }

}
