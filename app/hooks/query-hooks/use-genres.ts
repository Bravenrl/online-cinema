import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { GenreService } from '@/services/genre.service';

import { adaptGenreToTableItem } from '@/utils/adapter.utils';
import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

import { useDebounce } from '../use-debounce';
import { useRouter } from 'next/router';
import { AppRoute } from '@/config/app.config';
import { usePopularGenres } from './use-popular-genres';

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const {push} = useRouter();
  const {refetch: refetchPopularGenres} = usePopularGenres();

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const queryData = useQuery(
    [QueryTitle.SearchGenre, debouncedSearch],
    () => GenreService.getAll(debouncedSearch),
    {
      select: ({ data }) => data.map(adaptGenreToTableItem),
      onError: (error) => {
        toastError(error, ToastMessages.ErrorGenreList);
      },
    }
  );


  const { mutateAsync: createAsync } = useMutation(
    QueryTitle.CreateGenre,
    () => GenreService.create(),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorCreateGenre);
      },
      onSuccess: ({data: _id}) => {
        toast.success(ToastMessages.CreateGenre);
        push(`${AppRoute.Manage+AppRoute.Genre+AppRoute.Edit}/${_id}`)
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    QueryTitle.DeleteGenre,
    (movieId: string) => GenreService.delete(movieId),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorDeleteGenre);
      },
      onSuccess: () => {
        toast.success(ToastMessages.DeleteGenre);
        queryData.refetch();
        refetchPopularGenres();
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
