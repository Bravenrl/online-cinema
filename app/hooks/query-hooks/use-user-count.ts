import { useQuery } from 'react-query';

import { AdminService } from '@/services/admin.service';

import { QueryTitle } from '@/config/query.config';

export const useCountUsers = () => {
  return useQuery(QueryTitle.CountUsers, () => AdminService.getCountUsers(), {
    select: ({ data }) => data,
  });
};
