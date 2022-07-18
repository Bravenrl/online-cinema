import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { MovieService } from '@/services/movie.service';

import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

import { useDebounce } from '../use-debounce';
import { adaptMovieToTableItem } from '@/utils/adapter.utils';
import { useRouter } from 'next/router';
import { AppRoute } from '@/config/app.config';

export const useMovies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const {push} = useRouter();

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const queryData = useQuery(
    [QueryTitle.SearchAdminMovie, debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: ({ data }) => data.map(adaptMovieToTableItem),
      onError: (error) => {
        toastError(error, ToastMessages.ErrorMovieList);
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    QueryTitle.DeleteMovie,
    (movieId: string) => MovieService.delete(movieId),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorDeleteMovie);
      },
      onSuccess: () => {
        toast.success(ToastMessages.DeleteMovie);
        queryData.refetch();
      },
    }
  );

  const { mutateAsync: createAsync } = useMutation(
    QueryTitle.CreateMovie,
    () => MovieService.create(),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorCreateMovie);
      },
      onSuccess: ({data: _id}) => {
        toast.success(ToastMessages.CreateMovie);
        push(`${AppRoute.Manage+AppRoute.Movie+AppRoute.Edit}/${_id}`)
      },
    }
  );

  return useMemo(
    () => ({
      searchTerm,
      handleSearch,
      ...queryData,
      deleteAsync,
      createAsync,
    }),
    [searchTerm, queryData, deleteAsync, createAsync]
  );
};


