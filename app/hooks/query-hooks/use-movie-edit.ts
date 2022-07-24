import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { TypeMovieEdit } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

import { getKeys } from '@/utils/object.utils';
import { toastError } from '@/utils/toast-error.utils';

import { AppRoute } from '@/config/app.config';
import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

export const useMovieEdit = (setValue: UseFormSetValue<TypeMovieEdit>) => {
  const { push, query } = useRouter();

  const movieID = String(query.id);

  const { isLoading } = useQuery(
    [QueryTitle.Movie, movieID],
    () => MovieService.getById(movieID),
    {
      onSuccess: ({ data }) => {
        getKeys(data).forEach((key) => {
          setValue(key, data[key]);
        });
      },
      onError(err) {
        toastError(err, ToastMessages.ErrorGetMovie);
      },
      enabled: !!query.id,
    }
  );

  const { mutateAsync } = useMutation(
    QueryTitle.UpdateMovie,
    (data: TypeMovieEdit) => MovieService.update(movieID, data),
    {
      onError(err) {
        toastError(err, ToastMessages.ErrorUpdateMovie);
      },
      onSuccess() {
        toast.success(ToastMessages.UpdateMovie);
        push(AppRoute.Manage + AppRoute.AMovies);
      },
    }
  );

  const onSubmit: SubmitHandler<TypeMovieEdit> = async (
    data: TypeMovieEdit
  ) => {
    await mutateAsync(data);
  };

  return { onSubmit, isLoading };
};
