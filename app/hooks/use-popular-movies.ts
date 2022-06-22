import { useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';

import { QueryTitle } from '@/config/query.config';

export const usePopularMovies = () => {
  return useQuery(QueryTitle.Popular, () => MovieService.getMostPopular(), {
    select: ({ data }) => data,
  });
};
