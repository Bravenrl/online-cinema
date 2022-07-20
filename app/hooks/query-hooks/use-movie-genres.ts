import { useQuery } from 'react-query';

import { OptionsType } from '@/shared/types/assets.types';

import { GenreService } from '@/services/genre.service';

import { QueryTitle } from '@/config/query.config';
import { toastError } from '@/utils/toast-error.utils';
import { ToastMessages } from '@/config/toast.config';

export const useMovieGenres = () => {
  return useQuery(
    QueryTitle.MovieGenre,
    () => GenreService.getAll(),
    {
      select: ({ data }) =>
        data.map((genre): OptionsType => ({
          label: genre.name,
          value: genre._id,
        })),
      onError: (error) => {
        toastError(error, ToastMessages.ErrorGenreList);
      },
    }
  );
};
