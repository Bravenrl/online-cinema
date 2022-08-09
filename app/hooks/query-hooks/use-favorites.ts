import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { FAVORITES_COUNT } from '@/config/skeleton.config';
import { ToastMessages } from '@/config/toast.config';

export const useFavorites = (movieId?: string) => {
  const { isLoading, data: favoriteMovies } = useQuery(
    QueryTitle.Favorite,
    () => UserService.getFavorites(),
    {
      select: ({ data }) => data.slice(0, FAVORITES_COUNT),
    }
  );

  return {
    isLoading,
    favoriteMovies,
  };
};
