import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { ActorService } from '@/services/actors.service';

import { adaptActorToTableItem } from '@/utils/adapter.utils';
import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

import { useDebounce } from '../use-debounce';

export const useActors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const queryData = useQuery(
    [QueryTitle.SearchActor, debouncedSearch],
    () => ActorService.getAll(debouncedSearch),
    {
      select: ({ data }) => data.map(adaptActorToTableItem),
      onError: (error) => {
        toastError(error, ToastMessages.ErrorActorList);
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    QueryTitle.DeleteActor,
    (movieId: string) => ActorService.deleteActor(movieId),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorDeleteActor);
      },
      onSuccess: () => {
        toast.success(ToastMessages.DeleteActor);
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
