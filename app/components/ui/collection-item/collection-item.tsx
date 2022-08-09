import cn from 'classnames';
import Link from 'next/link';

import { TypeCollection } from '@/shared/types/gallery.types';

import CollectionImage from './collection-image/collection-image';
import styles from './collection-item.module.scss';
import { AppRoute } from '@/config/app.config';
import { getUrl } from '@/utils/api.utils';

type CollectionItemProps = {
  collection: TypeCollection;
};

function CollectionItem({
  collection: { slug, title, image },
}: CollectionItemProps): JSX.Element {
  return (
    <Link href={getUrl(AppRoute.Genre, slug)}>
      <a className={styles.collection}>
        <CollectionImage title={title} imageSrc={image} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={cn(styles.behind, styles.second)}>
          <CollectionImage title={title} imageSrc={image} />
        </div>
        <div className={cn(styles.behind, styles.third)}>
          <CollectionImage title={title} imageSrc={image} />
        </div>
      </a>
    </Link>
  );
}

export default CollectionItem;
