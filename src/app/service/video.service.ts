import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateVideo } from '../model/CreateVideo';
import { VideoDetails } from '../model/VideoDetails';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  // videos: VideoDetails[] = [
  //   {
  //     id: 1,
  //     title: 'Onplus 10R Review',
  //     channel: 'TechWiser',
  //     videoUrl: 'https://www.youtube.com/watch?v=Jv8_LDkg6Rg',
  //     thumbnail:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoNuR-XfEBJgTMkFoik8QABrExqKC_CNYWg&usqp=CAU',
  //     description: 'Check out OnePlus 10R 5G - https://amzn.to/3Me46zI ',
  //     logo: 'https://yt3.ggpht.com/l350nysbhW3iDxI5YoelK4c-bhNzoQ0Vpg6Qt1vZ0Cweu3PBiPsF0TBZ5ZQtI8dK1KspCMq7xA=s176-c-k-c0x00ffffff-no-rj',
  //     likes: 0,
  //     time: '12 May 2022',
  //   },
  //   {
  //     id: 2,
  //     title:
  //       'RRR Trailer - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022',
  //     channel: 'DVV Entertainment',
  //     videoUrl: 'https://www.youtube.com/watch?v=NgBoMJy386M&t=41s',
  //     thumbnail:
  //       'https://i.ytimg.com/vi/NgBoMJy386M/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjFjm-bBDz9Syat5ZvDj16-TGTlA',
  //     description:
  //       'From Indian Filmmaker SS Rajamouli (Director of Baahubali) comes Indias Biggest Action Drama #RRRMovie, in theatres March 25th, 2022',
  //     logo: 'https://yt3.ggpht.com/yLoFyAjWDE9wCZVMpOU_btGz8L-3iBvugSD2UDckz_WezSsZ1GvfKJnG_XN1KU3JW0wZQo1QRQ=s176-c-k-c0x00ffffff-no-rj-mo',
  //     likes: 0,
  //     time: '9 DEC 2021',
  //   },
  //   {
  //     id: 3,
  //     title:
  //       'BRAHMĀSTRA OFFICIAL TRAILER | Hindi | Amitabh | Ranbir | Alia | Ayan | In Cinemas 9th September',
  //     channel: 'Dharma Productions',
  //     videoUrl: 'https://www.youtube.com/watch?v=AgS_6UbQ8JM',
  //     thumbnail:
  //       'https://i.ytimg.com/vi/AgS_6UbQ8JM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtmuUC_vom9hv0sMGpQmk-53Gnmg',
  //     description:
  //       'Presenting the official Trailer of Brahmāstra. Get ready to experience a new world of Ancient Indian Astras and the magic of this extraordinary journey.',
  //     logo: 'https://yt3.ggpht.com/ytc/AKedOLQ7GkbJMx3cRmxUQyO4UNpmukpq2ptdBMX5J1ogoIU=s176-c-k-c0x00ffffff-no-rj-mo',
  //     likes: 0,
  //     time: '15 June 2022',
  //   },
  //   {
  //     id: 4,
  //     title:
  //       'Nanna na hero - Fathers day Special - Sridevi Drama Company Promo - 19th June 2022 - Rashmi Gautam',
  //     channel: 'Mallemalatv',
  //     videoUrl: 'https://www.youtube.com/watch?v=6LVBE54tI8A',
  //     thumbnail:
  //       'https://i.ytimg.com/vi/6LVBE54tI8A/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLByrFOcBmss3Kf0RAVSIN_A-rF-HQ',
  //     description:
  //       'Nanna na hero - Fathers day Special - Sridevi Drama Company Promo - 19th June 2022 - Rashmi Gautam',
  //     logo: 'https://yt3.ggpht.com/ytc/AKedOLRD_cpSSBjL9c5R-sDDdLDezNtN6EKJYTGK95KIBA=s176-c-k-c0x00ffffff-no-rj-mo',
  //     likes: 0,
  //     time: '15 June 2022',
  //   },
  //   {
  //     id: 5,
  //     title: 'Git Tutorial for Beginners',
  //     channel: 'Telusko',
  //     videoUrl: 'https://www.youtube.com/watch?v=WbwIoQYP6no&list=WL',
  //     thumbnail:
  //       'https://i.ytimg.com/vi/WbwIoQYP6no/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC3x6_72cP2lGCrElQS6M62NlK-Vw',
  //     description: 'Git Tutorial for Beginners- Navin Reddy',
  //     logo: 'https://yt3.ggpht.com/ytc/AKedOLQvY2hSrm6fs9KlScGc-z5kACXy0xodXGYmVuQJ=s176-c-k-c0x00ffffff-no-rj-mo',
  //     likes: 0,
  //     time: '15 June 2019',
  //   },
  //   {
  //     id: 6,
  //     title: 'z',
  //     channel: 'Telusko',
  //     videoUrl: 'https://www.youtube.com/watch?v=WbwIoQYP6no&list=WL',
  //     thumbnail:
  //       'https://i.ytimg.com/vi/WbwIoQYP6no/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC3x6_72cP2lGCrElQS6M62NlK-Vw',
  //     description: 'Git Tutorial for Beginners- Navin Reddy',
  //     logo: 'https://yt3.ggpht.com/ytc/AKedOLQvY2hSrm6fs9KlScGc-z5kACXy0xodXGYmVuQJ=s176-c-k-c0x00ffffff-no-rj-mo',
  //     likes: 0,
  //     time: '15 June 2019',
  //   },
  // ];
  constructor(private http: HttpClient) {}

  createVideo(video: CreateVideo) {
    return this.http.post(`http://localhost:9090/api/video/create`, video);
  }

  getAllVideos() {
    return this.http.get(`http://localhost:9090/api/video/getAll`);
  }

  getVideoById(id: number) {
    return this.http.get(`http://localhost:9090/api/video/get/${id}`);
  }

  getRemainingVideos(id: number) {
    return this.http.get(`http://localhost:9090/api/video/getRemain/${id}`);
  }

  search(searchString: string) {
    return this.http.get(`http://localhost:9090/api/video/getSearch/${searchString}`);
  }

  updateVideo(video :VideoDetails){
    return this.http.put(`http://localhost:9090/api/video/updateVideo`,video);
  }

  getMyVideos(){
    return this.http.get(`http://localhost:9090/api/video/myVideos/${localStorage.getItem('channel')}`);
  }

  deleteVideo(id : number){
    return this.http.delete(`http://localhost:9090/api/video/delete/${id}`)
  }
}
