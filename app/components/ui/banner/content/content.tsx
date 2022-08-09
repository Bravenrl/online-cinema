import { TypeMovie } from '@/shared/types/movie.types';

import { adaptToLink } from '@/utils/adapter.utils';

import { ContentName } from '@/config/banner.config';

import FavoriteButton from '../../favorite-button/favorite-button';
import MaterialIcon from '../../material-icon/material-icon';

import ContentList from './content-list/content-list';
import styles from './content.module.scss';

type ContentProps = { movie: TypeMovie };

function Content({ movie }: ContentProps): JSX.Element {
  const {
    parameters: { year, country, duration },
    genres,
    actors,
    _id,
  } = movie;

  const genresLinks = genres.slice(0, 3).map(adaptToLink);
  const actorsLinks = actors.slice(0, 3).map(adaptToLink);
  return (
    <div className={styles.content}>
      <h1>{movie.title}</h1>
      <div className={styles.details}>
        <span>{year}·</span>
        <span>{country}·</span>
        <span>{duration} min.</span>
      </div>
      <ContentList name={ContentName.Genres} links={genresLinks} />
      <ContentList name={ContentName.Actors} links={actorsLinks} />

      <FavoriteButton movieId={_id} />
    </div>
  );
}

export default Content;
