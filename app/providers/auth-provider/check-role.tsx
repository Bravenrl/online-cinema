import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/use-auth';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';

import { ApiRoute } from '@/config/api.config';

type CheckRoleProps = TypeComponentAuthFields & {
  children: JSX.Element;
};

function CheckRole({
  children,
  Component: { isOnlyAdmin, isOnlyAuthUser },
}: CheckRoleProps): JSX.Element | null {
  const { user } = useAuth();
  const router = useRouter();
  const isUser = user && !user.isAdmin;

  if (user?.isAdmin) {
    return children;
  }

  if (isOnlyAdmin) {
    router.pathname !== ApiRoute.NotFound && router.replace(ApiRoute.NotFound);
    return null;
  }

  if (isUser && isOnlyAuthUser) {
    return children;
  } else {
    router.pathname !== ApiRoute.Auth && router.replace(ApiRoute.Auth);
    return null;
  }
}

export default CheckRole;
