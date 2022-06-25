import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  // allVideos: VideoDetails[] = [];
  url: string = '';
  remainingVideos: VideoDetails[] = [];
  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    // if (this.url === '') this.url = this.video.videoUrl;
    // else this.url = '';
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getVideoById(this.id);
    this.getRemainingVideos(this.id);
    console.log(this.remainingVideos);
  }

  getSanitizedURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  like() {
    this.video.likes = this.video.likes + 1;
    this.updateVideo();
  }

  open(id: number) {
    this.getVideoById(id);
    this.getRemainingVideos(id);
  }

  videoUrl() {
    // return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(this.video.videoUrl))

    return this.sanitizer.bypassSecurityTrustUrl(this.video.videoUrl);
  }

  getRemainingVideos(id: number) {
    this.videoService.getRemainingVideos(id).subscribe({
      next: (response: any) => {
        console.log(response);

        this.remainingVideos = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getVideoById(id: number) {
    this.videoService.getVideoById(id).subscribe({
      next: (response: any) => {
        this.video = response;
        this.url = this.video.videoUrl;
      },
      error: (error: any) => {
        console.log();
      },
    });
  }
  updateVideo() {
    this.videoService.updateVideo(this.video).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
