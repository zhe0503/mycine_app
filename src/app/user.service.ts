import { Injectable } from '@angular/core';
import { HttpClient}    from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000/user';
  userName : String =""
  userEmail :String =""
  passeword: String =""
  constructor(private http:HttpClient) { }

  registerUser(userName,userEmail,passeword){

    const user = {
      person_name: userName,
      person_email:userEmail,
      passeword: passeword
    };
    console.log(user);
    this.http.post(`${this.uri}/add`, user)
        .subscribe(res => console.log('Done'));

  }

  getUser() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getName(): String {
    return this.userName;
  }

  getEmail(): String {
    return this.userEmail;
  }

  getPasseword(): String{
    return this.passeword;
  }

  

 
  }

