import { useAuth } from '@/hooks/use-auth';

import {
  AdminMenuItem,
  LoginMenuItem,
  ProfileMenuItem,
} from '@/shared/data/menu.data';

import LogoutBtn from '../logout-btn/logout-btn';
import MenuItem from '../menu-item/menu-item';

import styles from './auth-items.module.scss';

function AuthItems(): JSX.Element {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <MenuItem item={ProfileMenuItem} />
          <LogoutBtn />
        </>
      ) : (
        <MenuItem item={LoginMenuItem} />
      )}
      {user?.isAdmin && <MenuItem item={AdminMenuItem} />}
    </>
  );
}
export default AuthItems;
