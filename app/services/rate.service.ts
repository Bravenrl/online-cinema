import axios from 'api/api';

import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';

export const RateService = {
  async setRating(movieId: string, value: number) {
    return axios.post<string>(ApiRoute.Ratings + ApiRoute.SetRate, {
      movieId,
      value,
    });
  },

  async getByUserMovie(movieId: string) {
    return axios.get<number>(getUrl(ApiRoute.Ratings, movieId));
  },
};
