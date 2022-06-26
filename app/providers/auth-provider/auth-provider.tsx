import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useActions } from '@/hooks/use-actions';
import { useAuth } from '@/hooks/use-auth';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';

import { AuthConfig } from '@/config/auth.config';

const DynamicCheckRole = dynamic(() => import('./check-role'), { ssr: false });

type AuthProviderProps = TypeComponentAuthFields & {
  children: JSX.Element;
};

function AuthProvider({ children, Component }: AuthProviderProps): JSX.Element {
  const { isOnlyAdmin, isOnlyAuthUser } = Component;
  const { user } = useAuth();
  const { logout, checkAuth } = useActions();
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get(AuthConfig.AccessToken);
    if (accessToken) checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get(AuthConfig.RefreshToken);
    if (!refreshToken && user) logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return !isOnlyAdmin && !isOnlyAuthUser ? (
    children
  ) : (
    <DynamicCheckRole Component={Component}>{children}</DynamicCheckRole>
  );
}

export default AuthProvider;
