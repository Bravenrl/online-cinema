import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';

import { QueryTitle } from '@/config/query.config';

import { useDebounce } from '../use-debounce';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  }

  const {isSuccess, data} = useQuery(
    [QueryTitle.SearchMovie, debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: ({ data }) => data,
      enabled: !!debouncedSearch,
    }
  );

  return {searchTerm, handleSearch, isSuccess, data}
};
