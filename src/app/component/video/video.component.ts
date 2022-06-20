import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoDetails } from 'src/app/model/VideoDetails';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  id!: number;
  video: VideoDetails = {
    id: 0,
    title: '',
    channel: '',
    videoUrl: '',
    thumbnail: '',
    description: '',
    catagory:'',
    likes: '',
    time: '',
  };
  constructor(private route: ActivatedRoute,private videoService:VideoService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.video = this.videoService.getVideoById(this.id);
    console.log(this.video.videoUrl);
  }
}
