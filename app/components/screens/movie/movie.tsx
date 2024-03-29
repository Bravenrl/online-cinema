import dynamic from 'next/dynamic';

import Meta from '@/components/meta/meta';
import Banner from '@/components/ui/banner/banner';
import Content from '@/components/ui/banner/content/content';
import Gallery from '@/components/ui/gallery/gallery';
import SubHeading from '@/components/ui/headings/sub-heading/sub-heading';

import { useUpdateCountOpened } from '@/hooks/query-hooks/use-update-count-opened';

import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { TypeMovie } from '@/shared/types/movie.types';

import { SubHeadingTitle } from '@/config/heading.config';

import styles from './movie.module.scss';

const DynamicPlayer = dynamic(
  () => import('@/components/ui/video-player/video-player'),
  { ssr: false }
);

const DynamicRateMovie = dynamic(
  () => import('@/components/ui/rate-movie/rate-movie'),
  { ssr: false }
);

type MovieProps = {
  similarMovies: TypeGalleryItem[];
  movie: TypeMovie;
};

function Movie({ movie, similarMovies }: MovieProps): JSX.Element {
  useUpdateCountOpened(movie.slug);
  return (
    <>
      <Meta title={movie.title} description={`Watch ${movie.title}`} />
      <Banner image={movie.bigPoster}>
        <Content movie={movie} />
      </Banner>
      <DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />
      <div className={styles.similar}>
        <SubHeading title={SubHeadingTitle.Similar} />
        <Gallery items={similarMovies} />
      </div>
      <DynamicRateMovie slug={movie.slug} movieId={movie._id} />
    </>
  );
}

export default Movie;
