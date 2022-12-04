import { Podcast } from "./podcast";

export interface PodcastGenre {
  id: number;
  name: string;
  podcasts: Podcast[];
  total: number;
  has_next: boolean;
  has_previous: boolean;
  page_number: number;
  previous_page_number: number;
  next_page_number: number;
  listennotes_url: string;
}