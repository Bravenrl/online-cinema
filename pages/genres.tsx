import { GetStaticProps, NextPage } from 'next';


import { TypeCollection, TypeGalleryItem } from '@/shared/types/gallery.types';

import Collections from '@/components/screens/collections/collections';
import { GenreService } from '@/services/genre.service';
import { REVALIDATE_TIME } from '@/config/const';

type GenresPageProps = {
  collections: TypeCollection[];
};

const GenresPage: NextPage<GenresPageProps> = ({ collections }) => (
  <Collections
    collections={collections || []}
  />
);
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: collections } = await GenreService.getCollections();
    return {
      props: {
        collections,
      } as GenresPageProps,
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default GenresPage;
