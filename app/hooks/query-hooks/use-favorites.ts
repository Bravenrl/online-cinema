import { useQuery } from 'react-query';

import { UserService } from '@/services/user.service';

import { QueryTitle } from '@/config/query.config';
import { FAVORITES_COUNT } from '@/config/skeleton.config';

import { useAuth } from '../use-auth';

export const useFavorites = () => {
  const { user } = useAuth();
  const { isLoading, data: favoriteMovies } = useQuery(
    QueryTitle.Favorite,
    () => UserService.getFavorites(),
    {
      select: ({ data }) => data,
      enabled: !!user,
    }
  );

  return {
    isLoading,
    favoriteMovies,
  };
};
