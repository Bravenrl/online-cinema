import { axiosFree } from 'api/api';
import axios from 'api/api';

import { TypeMovie, TypeMovieEdit } from '@/shared/types/movie.types';

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
    return axiosFree.get<TypeMovie[]>(
      `${ApiRoute.Movies + ApiRoute.MostPopular}`
    );
  },
  
  async create() {
    return axios.post<string>(ApiRoute.Movies);
  },
  
  async delete(_id: string) {
    return axios.delete<string>(getUrl(ApiRoute.Movies, _id));
  },

  async getById(_id: string) {
    return axios.get<TypeMovieEdit>(getUrl(ApiRoute.Movies, _id));
  },
  
  async update(_id: string, data: TypeMovieEdit) {
    return axios.put<string>(getUrl(ApiRoute.Movies, _id), data);
  },

};
