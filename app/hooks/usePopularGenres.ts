import { UseQueryResult, useQuery } from 'react-query';

import { getGenres } from '@/services/genre.service';

import { adaptPopularGenreData } from '@/utils/adapter.utils';
import { MAX_GENRE_ITEMS } from '@/config/menu.config';

export const usePopularGenres = () => {
  return useQuery('popular genres', () => getGenres(), {
    select: ({ data }) => data.map(adaptPopularGenreData).slice(0, MAX_GENRE_ITEMS),
  });
};
