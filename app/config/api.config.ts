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
  Count = '/count',
  Files = '/files',
  BySlug = '/by-slug',
  ByGenres = '/by-genres',
  ByActor = '/by-actor',
  Profile = '/profile',
  SetRate = '/set-rating',
  UpdateCount = '/update-count-opened',
}


export const enum HttpCode {
  Unauthorized = 401,
  BadRequest = 400,
  NotFound = 404,
  OK = 200,
}
