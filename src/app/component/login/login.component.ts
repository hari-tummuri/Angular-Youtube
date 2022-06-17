import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={email:"",password:""}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.user.email==="hari@gmail.com" && this.user.password==="hari"){
      console.log("Logged in success fully");
      this.router.navigate(['/']);
    }
  }
}
