import SkeletonLoader from '@/ui/skeleton-loader/skeleton-loader';
import { GENRE_SKELETON_COUNT } from '@/config/skeleton.config';
import { usePopularGenres } from '@/hooks/usePopularGenres';

import Menu from '../menu/menu';

import styles from './genre-menu.module.scss';

function GenreMenu(): JSX.Element {
  const { isLoading, data } = usePopularGenres();

  return isLoading ? (
    <div className={styles.loader}>
      <SkeletonLoader count={GENRE_SKELETON_COUNT} className = {styles.skeleton} />
    </div>
  ) : (
    <Menu menu={{ title: 'Popular genres', items: data || [] }} />
  );
}
export default GenreMenu;
