import dynamic from 'next/dynamic';

import FavoriteMovies from '../favorite-movies/favorite-movies';
import PopularMovies from '../popular-movies/popular-movies';

const DynamicFavorites = dynamic(
  () => import('../favorite-movies/favorite-movies'),
  {
    ssr: false,
  }
);

function MoviesContainer(): JSX.Element {
  return (
    <div>
      <PopularMovies />
      <DynamicFavorites />
    </div>
  );
}
export default MoviesContainer;
