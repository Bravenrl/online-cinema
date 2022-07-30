import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/catalog/catalog';

import { TypeGalleryItem } from '@/shared/types/gallery.types';
import { TypeGenre } from '@/shared/types/movie.types';

import { GenreService } from '@/services/genre.service';
import { MovieService } from '@/services/movie.service';

import { adaptMovieToGalleryHorizontal } from '@/utils/adapter.utils';
import Error404 from '../404';


type GenrePageProps = {
  items: TypeGalleryItem[];
  genre: TypeGenre | undefined;
};

const GenrePage: NextPage<GenrePageProps> = ({ items, genre }) => {
 return genre ? ( <Catalog
    items={items || []}
    title={genre.name}
    description={genre.description}
  />
) : <Error404/>};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: genres } = await GenreService.getAll();
    const paths = genres.map((genre) => ({ params: { slug: genre.slug } }));
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
    const { data: genre } = await GenreService.getBySlug(String(params?.slug));
    const { data: movies } = await MovieService.getByGenres([genre._id]);
    const items = movies.map(adaptMovieToGalleryHorizontal);
    return {
      props: {
        items,
        genre,
      } as GenrePageProps,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default GenrePage;
