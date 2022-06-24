import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDetails } from 'src/app/model/VideoDetails';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css'],
})
export class MyVideosComponent implements OnInit {
  myVideos: VideoDetails[] = [];
  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {
    this.getMyVideos();
  }

  getMyVideos() {
    this.videoService.getMyVideos().subscribe({
      next: (response: any) => {
        console.log(response);
        this.myVideos = response;
        console.log(this.myVideos);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  delete(id: number) {
    console.log(id);
    this.videoService.deleteVideo(id).subscribe({next:(response:any)=>{
      console.log(response);
      this.getMyVideos();
    },error:(error:any)=>{
      console.log(error);
      
    }})
    
  }

  open(id: number) {
    this.router.navigate(['/video',id]);
  }
}
