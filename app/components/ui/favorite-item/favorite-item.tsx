import Image from 'next/image';
import Link from 'next/link';

import { TypeMovie } from '@/shared/types/movie.types';

import { getUrl } from '@/utils/api.utils';

import { AppRoute } from '@/config/app.config';

import FavoriteButton from '../favorite-button/favorite-button';

import styles from './favorite-item.module.scss';

type FavoriteItemProps = {
  movie: TypeMovie;
};

function FavoriteItem({ movie }: FavoriteItemProps): JSX.Element {
  return (
    <li className={styles.wrapper}>
      <FavoriteButton movieId={movie._id} />
      <Link href={getUrl(AppRoute.Movie, movie.slug)}>
        <a className={styles.item}>
          <Image
            alt={movie.title}
            src={movie.bigPoster}
            layout='fill'
            draggable={false}
            priority
            width={326}
            height={198}
          />
          <p className={styles.title}> {movie.title}</p>
        </a>
      </Link>
    </li>
  );
}

export default FavoriteItem;
