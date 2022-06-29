import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { GenreService } from '@/services/genre.service';

import { adaptGenreToTableItem } from '@/utils/adapter.utils';
import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

import { useDebounce } from '../use-debounce';

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

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

  const { mutateAsync: deleteAsync } = useMutation(
    QueryTitle.DeleteGenre,
    (movieId: string) => GenreService.deleteGenre(movieId),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorDeleteGenre);
      },
      onSuccess: () => {
        toast.success(ToastMessages.DeleteGenre);
        queryData.refetch();
      },
    }
  );

  return useMemo(
    () => ({
      searchTerm,
      handleSearch,
      ...queryData,
      deleteAsync,
    }),
    [searchTerm, queryData, deleteAsync]
  );
};
