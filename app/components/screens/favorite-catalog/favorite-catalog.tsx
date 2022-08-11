import Meta from '@/components/meta/meta';
import FavoriteItem from '@/components/ui/favorite-item/favorite-item';
import Heading from '@/components/ui/headings/heading/heading';
import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { useFavorites } from '@/hooks/query-hooks/use-favorites';

import { MetaTitle } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

import styles from './favorite-catalog.module.scss';

type FavoriteCatalogProps = {};

function FavoriteCatalog({}: FavoriteCatalogProps): JSX.Element {
  const { favoriteMovies, isLoading } = useFavorites();
  return (
    <>
      <Meta title={MetaTitle.Favorites} />
      <Heading title={HeadingTitle.Favorites} className={styles.heading} />
      {isLoading ? (
        <SkeletonLoader
          count={3}
          className={styles.skeleton}
          containerClassName={styles.container}
        />
      ) : (
        <ul className={styles.favorites}>
          {favoriteMovies?.map((movie) => (
            <FavoriteItem key={movie._id} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
}

export default FavoriteCatalog;
