import { TypeMovie } from "./movie.types";

export type TypeSlide = Pick<TypeMovie, '_id' | 'bigPoster' | 'title'> & {
    subTitle: string;
    link: string; 
  };