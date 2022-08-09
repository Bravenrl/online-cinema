import { GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/screens/catalog/catalog';

import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { TypeMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

import { adaptMovieToGalleryHorizontal } from '@/utils/adapter.utils';

import { CatalogTitle } from '@/config/heading.config';

type FreshPageProps = {
  items: TypeGalleryItem[];
};

const FreshPage: NextPage<FreshPageProps> = ({ items }) => (
  <Catalog
    items={items || []}
    title={CatalogTitle.Fresh}
    description={CatalogTitle.FreshDescription}
  />
);
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll();
    const items = movies.map(adaptMovieToGalleryHorizontal);
    return {
      props: {
        items,
      } as FreshPageProps,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default FreshPage;
