import Navigation from '../navigation/navigation';
import Sidebar from '../sidebar/sidebar';

import styles from './base-layout.module.scss';

type BaseLayout = {
  children: JSX.Element;
};

function BaseLayout({ children }: BaseLayout) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
}

export default BaseLayout;
