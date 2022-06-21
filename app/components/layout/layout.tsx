import Navigation from '../navigation/navigation';
import Sidebar from '../sidebar/sidebar';

import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
}

export default Layout;
