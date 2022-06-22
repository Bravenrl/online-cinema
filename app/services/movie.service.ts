import { axiosFree } from 'api/api';

import { TypeMovie } from '@/shared/types/movie.types';

import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosFree.get<TypeMovie[]>(ApiRoute.Movies, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },

  async getMostPopular() {
    return axiosFree.get<TypeMovie[]>(`${ApiRoute.Movies+ApiRoute.MostPopular}`);
  },
};
