import { useQuery } from 'react-query';

import { GenreService } from '@/services/genre.service';

import { adaptPopularGenreData } from '@/utils/adapter.utils';
import { MAX_GENRE_ITEMS } from '@/config/menu.config';
import { QueryTitle } from '@/config/query.config';

export const usePopularGenres = () => {
  return useQuery(QueryTitle.Genres, () => GenreService.getAll(), {
    select: ({ data }) => data.filter(genre=>genre.icon).map(adaptPopularGenreData).slice(0, MAX_GENRE_ITEMS),
  });
};
