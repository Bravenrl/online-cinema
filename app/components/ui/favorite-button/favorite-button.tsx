import cn from 'classnames';

import { useFavoriteToggler } from '@/hooks/query-hooks/use-favorite-toggler';
import { useFavorites } from '@/hooks/query-hooks/use-favorites';

import styles from './favorite-button.module.scss';

type FavoriteButtonProps = {
  movieId: string;
};

function FavoriteButton({ movieId }: FavoriteButtonProps): JSX.Element {
  const { favoriteMovies } = useFavorites();
  const { mutateAsync, isSmashed } = useFavoriteToggler(
    favoriteMovies,
    movieId
  );

  return (
    <button
      onClick={() => mutateAsync()}
      className={cn(styles.button, { [styles.animate]: isSmashed })}

    />
  );
}

export default FavoriteButton;
