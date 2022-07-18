import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { TypeActorEdit } from '@/shared/types/movie.types';

import { ActorService } from '@/services/actors.service';

import { getKeys } from '@/utils/object.utils';
import { toastError } from '@/utils/toast-error.utils';

import { AppRoute } from '@/config/app.config';
import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

export const useActorEdit = (setValue: UseFormSetValue<TypeActorEdit>) => {
  const { push, query } = useRouter();

  const actorID = String(query.id);

  const { isLoading } = useQuery(
    [QueryTitle.Actor, actorID],
    () => ActorService.getById(actorID),
    {
      onSuccess: ({ data }) => {
        getKeys(data).forEach((key) => {
          setValue(key, data[key]);
        });
      },
      onError(err) {
        toastError(err, ToastMessages.ErrorGetActor);
      },
      enabled: !!query.id,
    }
  );

  const { mutateAsync } = useMutation(
    QueryTitle.UpdateActor,
    (data: TypeActorEdit) => ActorService.update(actorID, data),
    {
      onError(err) {
        toastError(err, ToastMessages.ErrorUpdateActor);
      },
      onSuccess() {
        toast.success(ToastMessages.UpdateActor);
        push(AppRoute.Manage + AppRoute.AActors);
      },
    }
  );

  const onSubmit: SubmitHandler<TypeActorEdit> = async (
    data: TypeActorEdit
  ) => {
    await mutateAsync(data);
  };

  return { onSubmit, isLoading };
};
