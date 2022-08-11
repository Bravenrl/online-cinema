import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { useFavorites } from '@/hooks/query-hooks/use-favorites';
import { useAuth } from '@/hooks/use-auth';

import { AppRoute } from '@/config/app.config';
import { SidebarTitle } from '@/config/sidebar.config';
import { FAVORITES_COUNT } from '@/config/skeleton.config';

import MoviesList from '../movies-list/movies-list';
import NotAuthFavorites from '../not-auth-favorites/not-auth-favorites';

import styles from './favorite-movies.module.scss';

type FavoriteMoviesProps = {};

function FavoriteMovies({}: FavoriteMoviesProps): JSX.Element {
  const { favoriteMovies, isLoading } = useFavorites();
  const { user } = useAuth();
  const favoriteMoviesToShow = favoriteMovies?.slice(0, FAVORITES_COUNT);

  if (!user) return <NotAuthFavorites />;

  return isLoading ? (
    <div className={styles.loader}>
      <SkeletonLoader count={FAVORITES_COUNT} className={styles.skeleton} />
    </div>
  ) : (
    <MoviesList
      title={SidebarTitle.Favorites}
      link={AppRoute.Favorites}
      movies={favoriteMoviesToShow || []}
    />
  );
}

export default FavoriteMovies;
