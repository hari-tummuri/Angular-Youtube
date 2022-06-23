import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/model/UserDetails';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLogin = { username: '', password: '' };
  error: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  login() {
    this.authService.login(this.user).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response === null) {
          this.error = 'Invalid Credentials';
          this.user.username = '';
          this.user.password = '';
        } else {
          localStorage.setItem('username', response.username);
          localStorage.setItem('password', response.password);
          localStorage.setItem('channel', response.channel);
          localStorage.setItem('logo', response.logo);
          this.router.navigate(['/']);
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
