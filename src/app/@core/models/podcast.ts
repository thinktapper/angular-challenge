export interface Podcast {
  id: string;
  title: string;
  publisher: string;
  image: string;
  thumbnail: string;
  listennotes_url: string;
  total_episodes: number;
  description: string;
  itunes_id: number;
  rss: string;
  language: string;
  country: string;
  website: string;
  is_claimed: boolean;
  type: string;
  genre_ids: number[];
}