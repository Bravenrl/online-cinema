import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/screens/catalog/catalog';

import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { TypeActor } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

import { adaptMovieToGalleryHorizontal } from '@/utils/adapter.utils';
import Error404 from '../404';
import { ActorService } from '@/services/actors.service';
import { REVALIDATE_TIME } from '@/config/const';


type GenrePageProps = {
  items: TypeGalleryItem[];
  actor: TypeActor | undefined;
};

const GenrePage: NextPage<GenrePageProps> = ({ items, actor }) => {
 return actor ? ( <Catalog
    items={items || []}
    title={actor.name}
  />
) : <Error404/>};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: actors } = await ActorService.getAll();
    const paths = actors.map((actor) => ({ params: { slug: actor.slug } }));
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
    const { data: actor } = await ActorService.getBySlug(String(params?.slug));
    const { data: movies } = await MovieService.getByActor(actor._id);
    const items = movies.map(adaptMovieToGalleryHorizontal);
    return {
      props: {
        items,
        actor,
      } as GenrePageProps,
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default GenrePage;
