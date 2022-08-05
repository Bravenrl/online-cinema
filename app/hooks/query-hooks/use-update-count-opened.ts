import { useMutation } from 'react-query';

import { MovieService } from '@/services/movie.service';

import { QueryTitle } from '@/config/query.config';
import { useEffect } from 'react';

export const useUpdateCountOpened = (slug: string) => {
  const {mutateAsync} = useMutation(QueryTitle.UpdateCountOpened, () =>
    MovieService.updateCountOpened(slug)
  );

  useEffect(() => {
    mutateAsync();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
};
