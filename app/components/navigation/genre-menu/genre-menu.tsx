import { usePopularGenres } from '@/hooks/usePopularGenres';

import Menu from '../menu/menu';

import styles from './genre-menu.module.scss';

function GenreMenu(): JSX.Element {
  const { isLoading, data } = usePopularGenres();

  return isLoading ? (
    <div className={styles.loader}>Loading...</div>
  ) : (
    <Menu menu={{ title: 'Popular genres', items: data || [] }} />
  );
}
export default GenreMenu;
