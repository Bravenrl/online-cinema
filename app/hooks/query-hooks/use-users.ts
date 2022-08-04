import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { UserService } from '@/services/user.service';

import { adaptUserToTableItem } from '@/utils/adapter.utils';
import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

import { useDebounce } from '../use-debounce';

export const useUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const queryData = useQuery(
    [QueryTitle.SearchUser, debouncedSearch],
    () => UserService.getAllUsers(debouncedSearch),
    {
      select: ({ data }) => data.map(adaptUserToTableItem),
      onError: (error) => {
        toastError(error, ToastMessages.ErrorUserList);
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    QueryTitle.DeleteUser,
    (userId: string) => UserService.deleteUser(userId),
    {
      onError: (error) => {
        toastError(error, ToastMessages.ErrorDeleteUser);
      },
      onSuccess: () => {
        toast.success(ToastMessages.DeleteUser);
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
