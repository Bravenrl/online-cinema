import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { TypeAdminNavItem } from '@/shared/types/admin.types';

import styles from './admin-nav-item.module.scss';

type AdminNavItemProps = {
  item: TypeAdminNavItem;
};

function AdminNavItem({
  item: { link, title },
}: AdminNavItemProps): JSX.Element {
  const { asPath } = useRouter();

  return (
    <li>
      <Link href={link}>
        <a
          className={cn(styles.item, {
            [styles.active]: asPath === link,
          })}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

export default AdminNavItem;
