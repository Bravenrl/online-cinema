import { TypeAdminTableItem } from '@/shared/types/admin.types';
import { TypeMenuItem } from '@/shared/types/menu.types';
import { TypeActor, TypeGenre, TypeMovie } from '@/shared/types/movie.types';
import { TypeUserProfileResponse } from '@/shared/types/user.types';

import { AppRoute } from '@/config/app.config';

import { getUrl } from './api.utils';
import { convertMongoDate } from './date.utils';
import { getGenresList } from './movie.utils';

export const adaptPopularGenreData = (genre: TypeGenre) => {
  return {
    icon: genre.icon,
    link: getUrl(AppRoute.Genre, genre.slug),
    title: genre.name,
  } as TypeMenuItem;
};

export const adaptUserToTableItem = (
  user: TypeUserProfileResponse
): TypeAdminTableItem => ({
  _id: user._id,
  editUrl: AppRoute.Manage + AppRoute.User + AppRoute.Edit + `/${user._id}`,
  items: [user.email, convertMongoDate(user.createdAt)],
});

export const adaptMovieToTableItem = (
  movie: TypeMovie
): TypeAdminTableItem => ({
  _id: movie._id,
  editUrl: AppRoute.Manage + AppRoute.Movie + AppRoute.Edit + `/${movie._id}`,
  items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
});

export const adaptGenreToTableItem = (
  genre: TypeGenre
): TypeAdminTableItem => ({
  _id: genre._id,
  editUrl: AppRoute.Manage + AppRoute.Genre + AppRoute.Edit + `/${genre._id}`,
  items: [genre.name, genre.slug],
});

export const adaptActorToTableItem = (
  actor: TypeActor
): TypeAdminTableItem => ({
  _id: actor._id,
  editUrl: AppRoute.Manage + AppRoute.Actor + AppRoute.Edit + `/${actor._id}`,
  items: [actor.name, String(actor.countMovies)],
});
