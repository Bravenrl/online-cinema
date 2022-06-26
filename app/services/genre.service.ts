import { axiosFree } from 'api/api';

import { TypeGenre } from '@/shared/types/movie.types';

import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';

export const GenreService = {
  async getAll(searchTerm?: string) {
   return axiosFree.get<TypeGenre[]>(ApiRoute.Genres, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },
};
