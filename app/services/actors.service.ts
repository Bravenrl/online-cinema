import { axiosFree } from 'api/api';
import axios from 'api/api';


import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';
import { TypeActor } from '@/shared/types/movie.types';

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

  async deleteActor(_id: string) {
    return axios.delete<string>(getUrl(ApiRoute.Actors, _id));
  },
};
