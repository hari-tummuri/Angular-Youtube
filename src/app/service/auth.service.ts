import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../model/UserDetails';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserDetails = { username: 'hari@gmail.com', password: 'hari' };
  constructor(private router: Router) {}

  login(userDetails: UserDetails) {}
}
