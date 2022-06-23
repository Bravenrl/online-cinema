import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AppRoute } from '@/config/app.config';

import { useAuth } from './use-auth';

export const useAuthRedirect = () => {
  const { user } = useAuth();

  const { query, push } = useRouter();

  const redirect = String(query.redirect) || AppRoute.Home;

  useEffect(() => {
    if (user) {
      push(redirect);
    }
  }, [user, redirect, push]);
};
