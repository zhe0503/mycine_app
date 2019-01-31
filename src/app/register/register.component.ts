import { Component, OnInit } from '@angular/core';
import{UserService} from "../user.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
  }


  newUser(){
    if(this.userService.getEmail().length<8){
      alert("Your email address seems incorrect...");
    }
    else{
      if(this.userService.passeword.length<8){
        alert("Your password length should be longer than 8 ...");
      }
      else{
         this.userService.registerUser(this.userService.userName,this.userService.userEmail,this.userService.passeword)
        this.router.navigateByUrl('/profile');
           }
         
      }
    }
  }
   
  


