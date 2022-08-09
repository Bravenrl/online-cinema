import { useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';

import { QueryTitle } from '@/config/query.config';
import { POPULAR_COUNT } from '@/config/skeleton.config';

export const usePopularMovies = () => {
  return useQuery(QueryTitle.Popular, () => MovieService.getMostPopular(), {
    select: ({ data }) => data.slice(0, POPULAR_COUNT),
  });
};
