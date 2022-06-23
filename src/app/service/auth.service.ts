import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetails } from '../model/UserDetails';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserDetails = { username: 'hari@gmail.com', password: 'hari' ,channel:'Telusko',logo:'shfhsebfkjebkh'};
  constructor(private router: Router,private http:HttpClient) {}

  login(userLogin : UserLogin) {
    return this.http.post(`http://localhost:9090/api/auth/login`,userLogin)
  }

  register(user : UserDetails){
    return this.http.post(`http://localhost:9090/api/auth/signUp`,user);
  }


}
