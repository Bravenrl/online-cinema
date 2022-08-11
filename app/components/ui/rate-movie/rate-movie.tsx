import StarRating from 'react-star-rating-component';

import { useAuth } from '@/hooks/use-auth';
import { useRateMovie } from '@/hooks/use-rate-movie';

import AuthButton from '../video-player/auth-placeholder/auth-button/auth-button';

import styles from './rate-movie.module.scss';
import { emptyStarColor } from '@/config/const';

type RateMovieProps = {
  movieId: string;
  slug: string;
};

function RateMovie({ movieId, slug }: RateMovieProps): JSX.Element {
  const { user } = useAuth();
  const { rating, isSended, handleClick } = useRateMovie(movieId, user);

  return (
    <div className={styles.wrapper}>
      <h3>How do you like the movie</h3>
      <p>Ratings improve recommendation</p>
      {user ? (
        <>
          {isSended ? (
            <div className={styles.thanks}>Thanks for rating!</div>
          ) : (
            <StarRating name='star' value={rating} onStarClick={handleClick} emptyStarColor={emptyStarColor}/>
          )}
        </>
      ) : (
        <AuthButton slug={slug} />
      )}
    </div>
  );
}

export default RateMovie;
