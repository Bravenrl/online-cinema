import { adminNavItems } from '@/shared/data/admin.data';

import AdminNavItem from './admin-nav-item/admin-nav-item';
import styles from './admin-navigation.module.scss';

type AdminNavigationProps = {};

function AdminNavigation({}: AdminNavigationProps): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul>
        {adminNavItems.map((item) => (
          <AdminNavItem item={item} key={item.link} />
        ))}
      </ul>
    </nav>
  );
}

export default AdminNavigation;
