import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { TypeUserProfileEdit } from '@/shared/types/user.types';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error.utils';

import { AppRoute } from '@/config/app.config';
import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

export const useUserEdit = (
  setValue: UseFormSetValue<TypeUserProfileEdit>
) => {
  const { push, query } = useRouter();

  const userID = String(query.id);

  const { isLoading } = useQuery(
    [QueryTitle.User, userID],
    () => UserService.getById(userID),
    {
      onSuccess: ({ data }) => {
        setValue('email', data.email);
        setValue('isAdmin', data.isAdmin);
      },
      onError(err) {
        toastError(err, ToastMessages.ErrorGetUser);
      },
    }
  );

  const { mutateAsync } = useMutation(
    QueryTitle.UpdateUser,
    (data: TypeUserProfileEdit) => UserService.update(userID, data),
    {
      onError(err) {
        toastError(err, ToastMessages.ErrorUpdateGenre);
      },
      onSuccess() {
        toast.success(ToastMessages.UpdateGenre);
        push(AppRoute.Manage + AppRoute.AUsers);
      },
    }
  );

  const onSubmit: SubmitHandler<TypeUserProfileEdit> = async (
    data: TypeUserProfileEdit
  ) => {
    await mutateAsync(data);
  };

  return { onSubmit, isLoading };
};
