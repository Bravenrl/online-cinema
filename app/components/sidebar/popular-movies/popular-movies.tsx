import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { usePopularMovies } from '@/hooks/use-popular-movies';

import { POPULAR_SKELETON_COUNT } from '@/config/skeleton.config';

import styles from './popular-movies.module.scss';
import MoviesList from '../movies-list/movies-list';
import { SidebarTitle } from '@/config/sidebar.config';
import { AppRoute } from '@/config/app.config';

type PopularMoviesProps = {};

function PopularMovies({}: PopularMoviesProps): JSX.Element {
  const { isLoading, data } = usePopularMovies();

  return isLoading ? (
    <div className={styles.loader}>
      <SkeletonLoader
        count={POPULAR_SKELETON_COUNT}
        className={styles.skeleton}
      />
    </div>
  ) : (
    <MoviesList title={SidebarTitle.Popular} link={AppRoute.Trending} movies={data || []}/>
  );
}
export default PopularMovies;
