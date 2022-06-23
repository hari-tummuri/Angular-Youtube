import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchString: string=''
  username:any=localStorage.getItem('username')
  constructor(private videoService: VideoService,private router: Router) { }
  ngOnInit(): void {
  }

  search(){
    this.router.navigate(['/search',this.searchString])
    
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
