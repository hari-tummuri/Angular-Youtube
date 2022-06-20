import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDetails } from 'src/app/model/VideoDetails';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  video: VideoDetails = {
    id: 0,
    title: '',
    channel: '',
    videoUrl: '',
    thumbnail: '',
    description: '',
    logo:'',
    likes:0,
    time: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}
  create() {
    console.log('created');
    this.router.navigate(['/']);
  }
}
