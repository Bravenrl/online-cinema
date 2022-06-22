import FavoriteMovies from '../favorite-movies/favorite-movies';
import PopularMovies from '../popular-movies/popular-movies';

import styles from './movies-container.module.scss';

function MoviesContainer(): JSX.Element {
  return (
    <div>
      <PopularMovies />
      <FavoriteMovies />
    </div>
  );
}
export default MoviesContainer;
