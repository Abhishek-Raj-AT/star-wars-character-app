export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}
export interface SpeciesList {
  list: Species[]
  isLoading: boolean;
  page: number;
  total: number;
  nextPageUrl: null | string;
  prevPageUrl: null | string;
  limit: number;
}
