import Image from 'next/image';
import Link from 'next/link';

import MaterialIcon from '@/components/ui/material-icon/material-icon';

import { Icon } from '@/shared/data/icon.data';
import { TypeMovie } from '@/shared/types/movie.types';

import { getUrl } from '@/utils/api.utils';
import { getGenresItem } from '@/utils/movie.utils';

import { AppRoute } from '@/config/app.config';

import styles from './movie-item.module.scss';

type MovieItemProps = {
  movie: TypeMovie;
};

function MovieItem({ movie }: MovieItemProps): JSX.Element {
  return (
    <div className={styles.item}>
      <Link href={getUrl(AppRoute.Movie, movie.slug)}>
        <a>
          <Image
            width={65}
            height={97}
            src={movie.poster}
            alt={movie.title}
            draggable={false}
            priority
          />
        </a>
      </Link>
      <div className={styles.info}>
        <div>
          <h3 className={styles.title}>{movie.title}</h3>
          <div className={styles.genres}>
            {movie.genres.map((genre, index) => (
              <Link href={getUrl(AppRoute.Genre, genre.slug)} key={genre._id}>
                <a>{getGenresItem(index, movie.genres.length, genre.name)}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rating}>
          <MaterialIcon name={Icon.RatingStar} />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}
export default MovieItem;
