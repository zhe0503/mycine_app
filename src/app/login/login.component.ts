import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title : String = "MyCine"
  
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
    
  }
  onCreateUser(){
    
    if(this.userService.getEmail().length<8){
      alert("Your email address seems incorrect...");
    }
    else
      this.router.navigateByUrl('/profile');
    
  
  }


}
