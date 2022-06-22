import { ApiRoute } from '@/config/api.config';
import { AppRoute } from '@/config/app.config';

export const getUrl = (route: ApiRoute | AppRoute, string: string) =>
  `${route}/${string}`;
