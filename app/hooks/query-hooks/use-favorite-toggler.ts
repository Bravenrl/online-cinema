import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { TypeMovie } from '@/shared/types/movie.types';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

export const useFavoriteToggler = (
  favoriteMovies: TypeMovie[] | undefined,
  movieId: string
) => {

  const queryClient = useQueryClient();
  const [isSmashed, setIsSmashed] = useState(false);

  useEffect(() => {
    if (!favoriteMovies) return;

    const isHasMovie = favoriteMovies.some((movie) => movie._id === movieId);
    if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
  }, [isSmashed, favoriteMovies, movieId]);

  const { mutateAsync } = useMutation(
    QueryTitle.UpdateFavorites,
    () => UserService.toggleFavorites(movieId),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorUpdateFavorite);
      },
      onSuccess() {
        setIsSmashed((prevValue) => !prevValue);
        queryClient.invalidateQueries(QueryTitle.Favorite);
      },
    }
  );

  return { mutateAsync, isSmashed };
};
