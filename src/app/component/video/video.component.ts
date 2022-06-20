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
    logo: '',
    likes: 0,
    time: '',
  };
  allVideos: VideoDetails[] = [];
  url: string = '';
  remainingVideos: VideoDetails[] = [];
  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {
    this.remainingVideos = this.videoService.getRemainingVideos(this.id);
    console.log(this.remainingVideos);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.video = this.videoService.getVideoById(this.id);
  }

  like() {
    this.video.likes = this.video.likes + 1;
  }
  share() {
    if (this.url === '') this.url = this.video.videoUrl;
    else this.url = '';
  }
}
