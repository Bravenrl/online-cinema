import Meta from '@/components/meta/meta';
import CollectionItem from '@/components/ui/collection-item/collection-item';
import Description from '@/components/ui/headings/description/description';
import Heading from '@/components/ui/headings/heading/heading';
import { HeadingTitle } from '@/config/heading.config';
import { DISCOVERY_DESCRIPTION, MetaTitle } from '@/shared/data/meta.data';

import { TypeCollection } from '@/shared/types/gallery.types';

import styles from './collections.module.scss';

type CollectionsProps = {
  collections: TypeCollection[];
};

function Collections({ collections }: CollectionsProps): JSX.Element {
  return (
    <>
      <Meta title={MetaTitle.Discovery} description={DISCOVERY_DESCRIPTION} />
      <Heading title={HeadingTitle.Discovery} className={styles.heading} />

      <Description
        text={DISCOVERY_DESCRIPTION}
        className={styles.description}
      />

      <ul className={styles.collections}>
        {collections.map((item) => (
          <CollectionItem key={item._id} collection={item}/>
        ))}
      </ul>
    </>
  );
}

export default Collections;
