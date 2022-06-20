import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/model/UserDetails';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserDetails = { username: '', password: '' };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  login() {
    localStorage.setItem('username', this.user.username);
    this.router.navigate(['/']);
  }
}
