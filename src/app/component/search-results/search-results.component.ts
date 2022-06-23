import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoDetails } from 'src/app/model/VideoDetails';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  searchString!: string;
  searchVideos:VideoDetails[]=[]
  constructor(private videoService: VideoService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.searchString=this.route.snapshot.params['searchString']
    // console.log(this.searchString);
    this.search()
    
  }

  search() {
    this.videoService.search(this.searchString).subscribe({
      next: (response: any) => {
        // console.log(response);
        this.searchVideos=response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  open(id: number) {
    this.router.navigate(['/video',id]);
  }
}
