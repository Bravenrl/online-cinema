import { axiosFree } from 'api/api';
import axios from 'api/api';

import { TypeGenre, TypeGenreEdit } from '@/shared/types/movie.types';

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

  async getById(_id: string) {
    return axios.get<TypeGenreEdit>(getUrl(ApiRoute.Genres, _id));
  },
  
  async update(_id: string, data: TypeGenreEdit) {
    return axios.put<string>(getUrl(ApiRoute.Genres, _id), data);
  },
  
  async delete(_id: string) {
    return axios.delete<string>(getUrl(ApiRoute.Genres, _id));
  },

};
