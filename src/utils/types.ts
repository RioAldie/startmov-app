export interface MovieTypes {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  genre: [];
}
export interface GenreTypes {
  id: number;
  name: string;
}

export interface MovieCardTypes {
  id: number;
  poster_path: string;
  vote_average: number;
  popularity: number;
}

export interface CarouselTypes {
  genre: string;
  id: string;
}
