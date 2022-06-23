import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/model/Channel';
import { CreateVideo } from 'src/app/model/CreateVideo';
import { UserDetails } from 'src/app/model/UserDetails';
import { VideoDetails } from 'src/app/model/VideoDetails';
import { AuthService } from 'src/app/service/auth.service';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  video: CreateVideo = {
    title: '',
    videoUrl: '',
    thumbnail: '',
    description: '',
    likes: 0,
    channel:'',
    logo:''
  };
  newChannel:any;
  newLogo:any
  constructor(private router: Router, private videoService: VideoService) {}

  ngOnInit(): void {}
  create() {
    
    this.video.channel =localStorage.getItem('channel') as string;
    this.video.logo=localStorage.getItem('logo') as string;
    this.videoService.createVideo(this.video).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    
  }
}
