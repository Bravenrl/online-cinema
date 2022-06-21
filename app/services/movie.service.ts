import { axiosFree } from 'api/api';

import { TypeMovie } from '@/shared/types/movie.types';

import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';

export const MovieService = {
  async getAll(searchTerm?: string) {
   return axiosFree.get<TypeMovie[]>(getUrl(ApiRoute.Movies, ''), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },
};
