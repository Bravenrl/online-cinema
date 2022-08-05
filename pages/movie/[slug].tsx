import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Movie from '@/components/screens/movie/movie';

import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { TypeMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

import { adaptMovieToGalleryHorizontal } from '@/utils/adapter.utils';

import Error404 from '../404';

type MoviePageProps = {
  similarMovies: TypeGalleryItem[];
  movie: TypeMovie | undefined;
};

const MoviePage: NextPage<MoviePageProps> = ({ similarMovies, movie }) => {
  return movie ? (
    <Movie similarMovies={similarMovies || []} movie={movie} />
  ) : (
    <Error404 />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: actors } = await MovieService.getAll();
    const paths = actors.map((movie) => ({ params: { slug: movie.slug } }));
    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: movie } = await MovieService.getBySlug(String(params?.slug));
    const genreIds = movie.genres.map((genre) => genre._id);
    const { data: movies } = await MovieService.getByGenres(genreIds);
    const similarMovies = movies
      .filter((item) => item._id !== movie._id)
      .map(adaptMovieToGalleryHorizontal);
    return {
      props: {
        similarMovies,
        movie,
      } as MoviePageProps,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default MoviePage;
