import { useQuery } from 'react-query';

import { UserService } from '@/services/user.service';

import { QueryTitle } from '@/config/query.config';

export const useCountUsers = () => {
  return useQuery(QueryTitle.CountUsers, () => UserService.getCountUsers(), {
    select: ({ data }) => data,
  });
};
