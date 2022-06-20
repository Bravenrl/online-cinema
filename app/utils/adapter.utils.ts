import { TypeMenuItem } from '@/shared/types/menu.types';
import { TypeGenre } from '@/shared/types/movie.types';

import { AppRoute } from '@/config/api.config';

import { getUrl } from './api.utils';

export const adaptPopularGenreData = (genre: TypeGenre) => {
  return {
    icon: genre.icon,
    link: getUrl(AppRoute.Genre, genre.slug),
    title: genre.name,
  } as TypeMenuItem;
};
