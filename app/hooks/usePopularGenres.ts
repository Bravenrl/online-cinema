import { UseQueryResult, useQuery } from 'react-query';

import { getGenres } from '@/services/genre.service';

import { adaptPopularGenreData } from '@/utils/adapter.utils';

export const usePopularGenres = () => {
  return useQuery('popular genres', () => getGenres(), {
    select: ({ data }) => data.map(adaptPopularGenreData),
  });
};
