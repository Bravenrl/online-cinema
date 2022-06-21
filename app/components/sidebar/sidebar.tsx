import Search from './search/search';
import styles from './sidebar.module.scss';

function Sidebar(): JSX.Element {
  return (
    <aside className={styles.sidebar}>
      <Search />
    </aside>
  );
}

export default Sidebar;
