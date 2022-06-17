import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css'],
})
export class RegesterComponent implements OnInit {
  regesterUser = { email: '', password: '', confirmPassword: '' };
  constructor(private router:Router) {}

  ngOnInit(): void {}
  regester() {
    console.log('regestered');
    this.router.navigate(['/login']);
  }
}
