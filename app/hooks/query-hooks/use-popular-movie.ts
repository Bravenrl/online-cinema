import { useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';

import { QueryTitle } from '@/config/query.config';
import { TypeMovie } from '@/shared/types/movie.types';

export const usePopularMovies = () => {
  return useQuery(QueryTitle.Popular, () => MovieService.getMostPopular(), {
    select: ({data}) => data[0] as TypeMovie,
  });
};
