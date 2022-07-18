import { axiosFree } from 'api/api';
import axios from 'api/api';


import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';
import { TypeActor, TypeActorEdit } from '@/shared/types/movie.types';

export const ActorService = {
  async getAll(searchTerm?: string) {
    return axiosFree.get<TypeActor[]>(ApiRoute.Actors, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },

  async create() {
    return axios.post<string>(ApiRoute.Actors);
  },

  async delete(_id: string) {
    return axios.delete<string>(getUrl(ApiRoute.Actors, _id));
  },

  async getById(_id: string) {
    return axios.get<TypeActorEdit>(getUrl(ApiRoute.Actors, _id));
  },
  
  async update(_id: string, data: TypeActorEdit) {
    return axios.put<string>(getUrl(ApiRoute.Actors, _id), data);
  },
};
