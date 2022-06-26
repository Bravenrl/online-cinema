export const API_URL = `${process.env.APP_URL}/api`;

export enum ApiRoute {
  Auth = '/auth',
  Actors = '/actors',
  Genres = '/genres',
  Users = '/users',
  Movies = '/movies',
  Ratings = '/ratings',
  MostPopular = '/most-popular',
  Registration = '/register',
  Login = '/login',
  RefreshToken = '/access-token',
  NotFound = '/404',
}

export const enum HttpCode {
  Unauthorized = 401,
  BadRequest = 400,
  NotFound = 404,
  OK = 200,
}
