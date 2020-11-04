import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string,
              public username:string,
              public password:string       ) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
    authenticate(username, password) {
      return this.httpClient
        .post<any>("http://localhost:5001/login", { username, password })
        .pipe(
          map(userData => {
            sessionStorage.setItem("username", username);
            let tokenStr = "Bearer " + userData.token;
            sessionStorage.setItem("token", tokenStr);
            return userData;
          })
        );
    }
    public createEmployee(user) {
      return this.httpClient.post<User>(
        "http://localhost:5001/signup",
        user
      );
    }
    isUserLoggedIn() {
      let user = sessionStorage.getItem("username");
      console.log(!(user === null));
      return !(user === null);
    }
  
    logOut() {
      sessionStorage.removeItem("username");
    }
  }
  