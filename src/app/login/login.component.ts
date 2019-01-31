import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule }    from '@angular/common/http';
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

  checkUser(){
    
  }

  // new mehode login
  // call service getUsers
  // map lists users 
  // check if email exist 
  // then if passzord send equals password in db 
}
