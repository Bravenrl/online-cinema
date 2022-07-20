import { useQuery } from 'react-query';

import { OptionsType } from '@/shared/types/assets.types';

import { ActorService } from '@/services/actors.service';

import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';

export const useMovieActors = () => {
  return useQuery(QueryTitle.MovieActors, () => ActorService.getAll(), {
    select: ({ data }) =>
      data.map(
        (actor): OptionsType => ({
          label: actor.name,
          value: actor._id,
        })
      ),
    onError: (error) => {
      toastError(error, ToastMessages.ErrorGenreList);
    },
  });
};
