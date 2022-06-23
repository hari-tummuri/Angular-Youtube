import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoDetails } from 'src/app/model/VideoDetails';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: number;
  video!: VideoDetails ;
  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getVideoById()
  }

  getVideoById() {
    this.videoService.getVideoById(this.id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.video = response;
      },
      error: (error: any) => {
        console.log();
      },
    });
  }
  update() {
    this.videoService.updateVideo(this.video).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/myVideos'])
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
