import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDetails } from 'src/app/model/VideoDetails';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: VideoDetails[]=[]
  constructor(private videoService : VideoService,private http:HttpClient) { }

  ngOnInit(): void {
    this.videos=this.videoService.getAllVideos();
  }
  
}
