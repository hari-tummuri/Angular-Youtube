import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';

import { UserDetails } from 'src/app/model/UserDetails';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css'],
})
export class RegesterComponent implements OnInit {
  registeruser={ username: '', password: '',confirmPassword:'', channel: '', logo: ''}
  user: UserDetails = { username: '', password: '', channel: '', logo: '' };
  confirmPassword: string = '';
  error:string=''
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}
  validate(){
    if(this.registeruser.password === this.registeruser.confirmPassword){
        return true;
    }
    this.error="Password and Confirm password shoud be same"
    return false;
  }
  regester() {
    if (this.validate()) {
      this.user.username=this.registeruser.username;
      this.user.password=this.registeruser.password;
      this.user.channel=this.registeruser.channel;
      this.user.logo=this.registeruser.logo;
      this.auth.register(this.user).subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}
