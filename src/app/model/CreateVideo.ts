import { Channel } from "./Channel";
import { UserDetails } from "./UserDetails";

export interface CreateVideo {
  title: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
  likes: number;
  channel :string;
  logo:string;
}
