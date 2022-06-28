import Link from 'next/link';

import MaterialIcon from '@/components/ui/material-icon/material-icon';

import { Icon } from '@/shared/data/icon.data';

import styles from './admin-actions.module.scss';

type AdminActionsProps = {
  editUrl: string;
  removeHandler: () => void;
};

function AdminActions({
  editUrl,
  removeHandler,
}: AdminActionsProps): JSX.Element {
  return (
    <div className={styles.actions}>
      <Link href={editUrl}>
        <a>
          <MaterialIcon name={Icon.EditUser} />
        </a>
      </Link>
      <button onClick={removeHandler}>
        <MaterialIcon name={Icon.DeleteUser} />
      </button>
    </div>
  );
}

export default AdminActions;
