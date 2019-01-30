import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName : String =""
  userEmail :String =""
  constructor() { }

  getName(): String {
    return this.userName;
  }

  getEmail(): String {
    return this.userEmail;
  }
}
