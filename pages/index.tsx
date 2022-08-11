import type { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/home';

import { TypeSlide } from '@/shared/types/slider.types';

import { MovieService } from '@/services/movie.service';

import { adaptActorToGallery, adaptMovieToGallery, adaptMovieToSlide } from '@/utils/adapter.utils';
import { GALLERY_LENGTH, SLIDER_LENGTH } from '@/shared/data/const';
import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { ActorService } from '@/services/actors.service';
import { REVALIDATE_TIME } from '@/config/const';

type HomePageProps = {
  slides: TypeSlide[];
  trendingMovies: TypeGalleryItem[];
  actors: TypeGalleryItem[];
};

const HomePage: NextPage<HomePageProps> = ({ slides, trendingMovies, actors }) => (
  <Home slides={slides} trendingMovies={trendingMovies} actors={ actors }/>
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll();
    const slides = movies.sort(() => 0.5 - Math.random()).slice(0, SLIDER_LENGTH).map(adaptMovieToSlide);

    const { data: dataTrendingMovies } = await MovieService.getMostPopular();
    const { data: dataActors } = await ActorService.getAll();

    const trendingMovies = dataTrendingMovies.slice(0, GALLERY_LENGTH).map(adaptMovieToGallery);
    const actors = dataActors.slice(0, GALLERY_LENGTH).map(adaptActorToGallery);

    return {
      props: {
        slides,
        actors,
        trendingMovies,
      } as HomePageProps,
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return {
      props: {
        slides: [],
        actors: [],
        trendingMovies: [],
      },
    };
  }
};

export default HomePage;
