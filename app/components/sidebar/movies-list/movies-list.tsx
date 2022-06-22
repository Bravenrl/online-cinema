import Link from 'next/link';

import { TypeMovie } from '@/shared/types/movie.types';

import MovieItem from '../movie-item/movie-item';

import styles from './movies-list.module.scss';

type MoviesListProps = {
  title: string;
  link: string;
  movies: TypeMovie[];
};

function MoviesList({ title, link, movies }: MoviesListProps): JSX.Element {
  return (
    <div className={styles.list}>
      <h2 className={styles.heading}> {title} </h2>
      {movies.map((movie) => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
      <Link href={link}>
        <a className={styles.button}>See more</a>
      </Link>
    </div>
  );
}
export default MoviesList;
