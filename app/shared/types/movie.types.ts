import { TypeMaterialIcon } from './icon.types';

export type TypeGenre = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: TypeMaterialIcon;
};

export type TypeGenreEdit = Omit<TypeGenre, '_id'>;

export type TypeMovieParams = {
  year: number;
  duration: number;
  country: string;
};

export type TypeActor = {
  _id: string;
  photo: string;
  name: string;
  countMovies: string;
  slug: string;
};

export type TypeActorEdit = Omit<TypeActor, '_id'>;

export type TypeMovie = {
  _id: string;
  poster: string;
  bigPoster: string;
  title: string;
  parameters: TypeMovieParams;
  genres: TypeGenre[];
  actors: TypeActor[];
  countOpened: number;
  videoUrl: string;
  rating: number;
  slug: string;
  isSendTelegram: boolean,
};

export type TypeMovieEdit = Omit<TypeMovie, '_id'>;