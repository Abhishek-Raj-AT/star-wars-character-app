export interface filmInformation {
 title: string;
 episode_id: number;
 characters: string[];
 created: string;
 director: string;
 edited: string;
 opening_crawl: string
 producer: string;
 release_date: string;
 url: string;
 starships: string[];
 species: string[];
 planets: string[];
}
export interface initialFilmList {
  list: filmInformation[];
  isLoading: boolean;
  value: number;
}
