import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { TypeGenreEdit } from '@/shared/types/movie.types';

import { GenreService } from '@/services/genre.service';

import { getKeys } from '@/utils/object.utils';
import { toastError } from '@/utils/toast-error.utils';

import { AppRoute } from '@/config/app.config';
import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

export const useGenreEdit = (setValue: UseFormSetValue<TypeGenreEdit>) => {
  const { push, query } = useRouter();

  const genreID = String(query.id);

  const { isLoading } = useQuery(
    [QueryTitle.Genre, genreID],
    () => GenreService.getById(genreID),
    {
      onSuccess: ({ data }) => {
        getKeys(data).forEach((key) => {
          setValue(key, data[key]);
        });
      },
      onError(err) {
        toastError(err, ToastMessages.ErrorGetGenre);
      },
      enabled: !!query.id,
    }
  );

  const { mutateAsync } = useMutation(
    QueryTitle.UpdateGenre,
    (data: TypeGenreEdit) => GenreService.update(genreID, data),
    {
      onError(err) {
        toastError(err, ToastMessages.ErrorUpdateGenre);
      },
      onSuccess() {
        toast.success(ToastMessages.UpdateGenre);
        push(AppRoute.Manage + AppRoute.AGenres);
      },
    }
  );

  const onSubmit: SubmitHandler<TypeGenreEdit> = async (
    data: TypeGenreEdit
  ) => {
    await mutateAsync(data);
  };

  return {onSubmit, isLoading};
};
