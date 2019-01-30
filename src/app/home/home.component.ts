import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../user.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name : String =""
  email :String =""
  constructor(private router: Router,private userService: UserService) {
    
   }
  title : String = "MyCine"
  ngOnInit() {
    
  }
  setListTo(){
    if (this.userService.getName()==""){
      this.router.navigateByUrl('/login');
      }
      else
      this.router.navigateByUrl('/mylist');
      console.log("return the home page")

  
  }

  setListToAll(){
  
  }
  backToHome(){
    if (this.userService.getName()==""){
    this.router.navigateByUrl('/login');
    }
    else
    this.router.navigateByUrl('/profile');
    console.log("return the home page")
  }
}

