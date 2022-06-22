import MoviesContainer from './movies-container/movies-container';
import Search from './search/search';
import styles from './sidebar.module.scss';

function Sidebar(): JSX.Element {
  return (
    <aside className={styles.sidebar}>
      <Search />
      <MoviesContainer/>
    </aside>
  );
}

export default Sidebar;
