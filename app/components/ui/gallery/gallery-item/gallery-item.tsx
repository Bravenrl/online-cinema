import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { TypeGalleryItem } from '@/shared/types/gallery.types';

import styles from '../gallery.module.scss';

type GalleryItemProps = {
  item: TypeGalleryItem;
  variant: 'vertical' | 'horizontal';
};

function GalleryItem({ item, variant }: GalleryItemProps): JSX.Element {
  return (
    <Link href={item.link}>
      <a
        className={cn(styles.item, {
          [styles.with_text]: item.content,
          [styles.horizontal]: variant === 'horizontal',
          [styles.vertical]: variant === 'vertical',
        })}
      >
        <Image
          alt={item.name}
          src={item.posterPath}
          layout='fill'
          draggable={false}
          priority
        />

        {item.content && (
          <div className={styles.content}>
            <p className={styles.title}> {item.content.title}</p>
            {item.content.subTitle && (
              <p className={styles.subTitle}>{item.content.subTitle}</p>
            )}
          </div>
        )}
      </a>
    </Link>
  );
}

export default GalleryItem;
