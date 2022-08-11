import { GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/screens/catalog/catalog';

import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { TypeMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

import { adaptMovieToGalleryHorizontal } from '@/utils/adapter.utils';

import { CatalogTitle } from '@/config/heading.config';
import { REVALIDATE_TIME } from '@/config/const';

type TrendingPageProps = {
  items: TypeGalleryItem[];
};

const TrendingPage: NextPage<TrendingPageProps> = ({ items }) => (
  <Catalog
    items={items || []}
    title={CatalogTitle.Trending}
    description={CatalogTitle.TrendingDescription}
  />
);
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getMostPopular();
    const items = movies.map(adaptMovieToGalleryHorizontal);
    return {
      props: {
        items,
      } as TrendingPageProps,
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default TrendingPage;
