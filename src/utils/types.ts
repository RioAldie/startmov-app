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
  title: string;
}

export interface CarouselTypes {
  genre: string;
  id: string;
}
export interface PaginationTypes {
  page: number;
  handlePage: (page: number) => void;
}
export interface BannerTypes {
  poster_path: string;
  title: string;
  tagline: string;
  overview: string;
  release_date: string;
  spoken_languages: [];
  genres: [];
  production_companies: [];
  popularity: number;
  vote_average: number;
}
export interface QueryTypes {
  query: string | undefined;
}
