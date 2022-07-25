import type { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/home';

import { TypeSlide } from '@/shared/types/slider.types';

import { MovieService } from '@/services/movie.service';

import { adaptMovieToSlide } from '@/utils/adapter.utils';

type HomePageProps = {
  slides: TypeSlide[];
};

const HomePage: NextPage<HomePageProps> = ({ slides }) => (
  <Home slides={slides} />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll();
    const slides = movies.slice(0, 3).map(adaptMovieToSlide);

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
