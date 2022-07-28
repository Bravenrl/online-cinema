import Meta from '@/components/meta/meta';
import { TypeGalleryItem } from '@/shared/types/gallery.types';

import { TypeMovie } from '@/shared/types/movie.types';

import { adaptMovieToGallery } from '@/utils/adapter.utils';

import GalleryItem from '../gallery/gallery-item/gallery-item';
import Description from '../headings/description/description';
import Heading from '../headings/heading/heading';

import styles from './catalog.module.scss';

type CatalogProps = {
  title: string;
  description: string;
  items: TypeGalleryItem[];
};

function Catalog({ items, title, description }: CatalogProps): JSX.Element {
  return (
    <>
      <Meta title={title} description={description} />
      <Heading title={title} className={styles.heading} />

      {description && (
        <Description
          text={description}
          className={styles.catalog_description}
        />
      )}

      <ul className={styles.movies}>
        {items.map((item) => (
          <GalleryItem
            key={item.link}
            item={item}
            variant='horizontal'
          />
        ))}
      </ul>
    </>
  );
}

export default Catalog;
