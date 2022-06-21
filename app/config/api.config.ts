export const API_URL = `${process.env.APP_URL}/api`;

export enum ApiRoute {
  Auth = '/auth',
  Actors = '/actors',
  Genres = '/genres',
  Users = '/users',
  Movies = '/movies',
  Ratings = '/ratings',
}

export enum AppRoute {
  Actor = '/actor',
  Genre = '/genre',
  Movie = '/movie',
  Manage = '/manage',
}

export enum QueryTitle {
  Genres = 'popular genres',
  SearchMovie = 'search movie list',
}
