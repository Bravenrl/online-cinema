import { MouseEvent } from 'react';

import MaterialIcon from '@/components/ui/material-icon/material-icon';

import { useActions } from '@/hooks/use-actions';

import { Icon } from '@/shared/data/icon.data';

import styles from './logout-btn.module.scss';

function LogoutBtn(): JSX.Element {
  const { logout } = useActions();

  const handleLogout = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    logout();
  };

  return (
    <li className={styles.button}>
      <a onClick={handleLogout}>
        <MaterialIcon name={Icon.Logout} />
        <span>Logout</span>
      </a>
    </li>
  );
}
export default LogoutBtn;
