import { axiosFree } from 'api/api';
import axios from 'axios';

import { TypeGenre } from '@/shared/types/movie.types';

import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';

export const getGenres = async (searchTerm?: string) =>
  axiosFree.get<TypeGenre[]>(getUrl(ApiRoute.Genres, ''), {
    params: searchTerm
      ? {
          searchTerm,
        }
      : {},
  });
