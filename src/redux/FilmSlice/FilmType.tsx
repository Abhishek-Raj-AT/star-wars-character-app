export interface filmInformation {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
}
export interface initialFilmList {
  list: filmInformation[];
  isLoading: boolean;
  value: number;
}
