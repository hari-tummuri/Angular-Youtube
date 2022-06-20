import { Injectable } from '@angular/core';
import { VideoDetails } from '../model/VideoDetails';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videos: VideoDetails[] = [
    {
      id: 1,
      title: 'Onplus 10R Review',
      channel: 'TechWiser',
      videoUrl: 'https://www.youtube.com/watch?v=Jv8_LDkg6Rg',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoNuR-XfEBJgTMkFoik8QABrExqKC_CNYWg&usqp=CAU',
      description: 'Check out OnePlus 10R 5G - https://amzn.to/3Me46zI ',
      catagory:'Informative',
      likes: '3.4k',
      time: '10 days ago',
    },
    {
      id: 2,
      title:
        'RRR Trailer - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022',
      channel: 'DVV Entertainment',
      videoUrl: 'https://www.youtube.com/watch?v=NgBoMJy386M&t=41s',
      thumbnail:
        'https://i.ytimg.com/vi/NgBoMJy386M/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjFjm-bBDz9Syat5ZvDj16-TGTlA',
      description:
        'From Indian Filmmaker SS Rajamouli (Director of Baahubali) comes Indias Biggest Action Drama #RRRMovie, in theatres March 25th, 2022',
        catagory:'Entertainment',
      likes: '1.8M',
      time: '9 DEC 2021',
    },
    {
      id: 3,
      title:
        'BRAHMĀSTRA OFFICIAL TRAILER | Hindi | Amitabh | Ranbir | Alia | Ayan | In Cinemas 9th September',
      channel: 'Dharma Productions',
      videoUrl: 'https://www.youtube.com/watch?v=AgS_6UbQ8JM',
      thumbnail:
        'https://i.ytimg.com/vi/AgS_6UbQ8JM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtmuUC_vom9hv0sMGpQmk-53Gnmg',
      description:
        'Presenting the official Trailer of Brahmāstra. Get ready to experience a new world of Ancient Indian Astras and the magic of this extraordinary journey.',
        catagory:'Entertainment',
      likes: '267K',
      time: '15 June 2022',
    },
    {
      id: 4,
      title:
        'Nanna na hero - Fathers day Special - Sridevi Drama Company Promo - 19th June 2022 - Rashmi Gautam',
      channel: 'Mallemalatv',
      videoUrl: 'https://www.youtube.com/watch?v=6LVBE54tI8A',
      thumbnail:
        'https://i.ytimg.com/vi/6LVBE54tI8A/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLByrFOcBmss3Kf0RAVSIN_A-rF-HQ',
      description:
        'Nanna na hero - Fathers day Special - Sridevi Drama Company Promo - 19th June 2022 - Rashmi Gautam',
        catagory:'Entertainment',
      likes: '74K',
      time: '15 June 2022',
    },
  ];
  constructor() {}

  getAllVideos() {
    return this.videos;
  }

  getVideoById(id: number) {
    for (var i = 0; i < this.videos.length; i++) {
      if (id === this.videos[i].id) {
        return this.videos[i];
      }
    }
    return this.videos[0];
  }
}
