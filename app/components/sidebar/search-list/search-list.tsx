import Image from 'next/image';
import Link from 'next/link';

import { TypeMovie } from '@/shared/types/movie.types';

import { getUrl } from '@/utils/api.utils';

import { AppRoute } from '@/config/app.config';

import styles from './search-list.module.scss';

type SearchListProps = {
  movies: TypeMovie[];
};

function SearchList({ movies }: SearchListProps): JSX.Element {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link href={getUrl(AppRoute.Movie, movie.slug)} key={movie._id}>
            <a>
              <Image
                src={movie.poster}
                width={50}
                height={50}
                alt={movie.title}
                objectFit='cover'
                objectPosition='top'
                draggable={false}
              />
              <span>{movie.title}</span>
            </a>
          </Link>
        ))
      ) : (
        <p>Movies not found</p>
      )}
    </div>
  );
}
export default SearchList;
