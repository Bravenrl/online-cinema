export const API_URL = `${process.env.APP_URL}/api`;

export enum ApiRoute {
  Auth = '/auth',
  Actors = '/actors',
  Genres = '/genres',
  Users = '/users',
  Movies = '/movies',
  Ratings = '/ratings',
  MostPopular = '/most-popular',
  Register = '/register',
  Login = '/login',
  RefreshToken = '/access-token',
}
