import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';
import SubHeading from '@/components/ui/sub-heading/sub-heading';

import { usePopularMovies } from '@/hooks/use-popular-movie';

import { getUrl } from '@/utils/api.utils';

import { AppRoute } from '@/config/app.config';
import { SubHeadingTitle } from '@/config/heading.config';

import styles from './popular-movie.module.scss';

type PopularMovieProps = {};

function PopularMovie({}: PopularMovieProps): JSX.Element {
  const { isLoading, data: movie } = usePopularMovies();
  return (
    <div className={cn(styles.block, styles.popular)}>
      {isLoading ? (
        <SkeletonLoader className={styles.skeleton} />
      ) : (
        movie && (
          <>
            <SubHeading title={SubHeadingTitle.MostPopular} />
            <h3 className={styles.opened}>
              Opened {movie.countOpened} times
            </h3>
            <Link href={getUrl(AppRoute.Movie, movie.slug)}>
              <a>
                <Image
                  width={285}
                  height={176}
                  src={movie.bigPoster}
                  alt={movie.title}
                  className={styles.image}
                  unoptimized
                />
              </a>
            </Link>
          </>
        )
      )}
    </div>
  );
}

export default PopularMovie;
