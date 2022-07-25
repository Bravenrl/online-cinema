import type { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/home';

import { TypeSlide } from '@/shared/types/slider.types';

import { MovieService } from '@/services/movie.service';

import { adaptMovieToSlide } from '@/utils/adapter.utils';
import { SLIDER_LENGTH } from '@/shared/data/const';

type HomePageProps = {
  slides: TypeSlide[];
};

const HomePage: NextPage<HomePageProps> = ({ slides }) => (
  <Home slides={slides} />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll();
    const slides = movies.sort(() => 0.5 - Math.random()).slice(0, SLIDER_LENGTH).map(adaptMovieToSlide);

    return {
      props: {
        slides,
      } as HomePageProps,
    };
  } catch (error) {
    return {
      props: {
        slides: [],
      },
    };
  }
};

export default HomePage;
