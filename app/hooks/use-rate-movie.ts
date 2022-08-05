import { useState } from 'react';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { toast } from 'react-toastify';

import { RateService } from '@/services/rate.service';

import { toastError } from '@/utils/toast-error.utils';

import { QueryTitle } from '@/config/query.config';
import { ToastMessages } from '@/config/toast.config';
import { TypeUser } from '@/shared/types/user.types';

export const useRateMovie = (movieId: string, user: TypeUser | null) => {
  const [rating, setRating] = useState(0);
  const [isSended, setIsSended] = useState(false);
  const queryClient = useQueryClient();

  const { refetch } = useQuery(
    [QueryTitle.GetMovieRank, movieId],
    () => RateService.getByUserMovie(movieId),
    {
      onSuccess: ({ data }) => {
        setRating(data);
      },
      onError: (err) => {
        toastError(err, ToastMessages.ErrorGetRating);
      },
      enabled: !!user,
    }
  );
  
  const { mutateAsync } = useMutation(
    QueryTitle.SetMovieRank,
    ({ value }: { value: number }) => RateService.setRating(movieId, value),
    {
      onError: (err) => {
        toastError(err, ToastMessages.ErrorSetRating);
      },
      onSuccess: () => {
        toast.success(ToastMessages.SuccessRate);
        setIsSended(true);
        refetch();
        queryClient.invalidateQueries(QueryTitle.Popular);
        setTimeout(() => {
          setIsSended(false);
        }, 2400);
      },
    }
  );

  const handleClick = async (nextValue: number) => {
    setRating(nextValue);
    await mutateAsync({ value: nextValue });
  };

  return {
    isSended,
    rating,
    handleClick,
  };
};
