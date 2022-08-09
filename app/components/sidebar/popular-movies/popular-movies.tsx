import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { usePopularMovies } from '@/hooks/query-hooks/use-popular-movies';

import { AppRoute } from '@/config/app.config';
import { SidebarTitle } from '@/config/sidebar.config';
import { POPULAR_COUNT } from '@/config/skeleton.config';

import MoviesList from '../movies-list/movies-list';

import styles from './popular-movies.module.scss';

type PopularMoviesProps = {};

function PopularMovies({}: PopularMoviesProps): JSX.Element {
  const { isLoading, data: popularMovies } = usePopularMovies();

  return isLoading ? (
    <div className={styles.loader}>
      <SkeletonLoader
        count={POPULAR_COUNT}
        className={styles.skeleton}
      />
    </div>
  ) : (
    <MoviesList
      title={SidebarTitle.Popular}
      link={AppRoute.Trending}
      movies={popularMovies || []}
    />
  );
}
export default PopularMovies;
