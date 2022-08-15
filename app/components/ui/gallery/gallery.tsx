import { TypeGalleryItem } from '@/shared/types/gallery.types';
import GalleryItem from '../gallery-item/gallery-item';
import styles from './gallery.module.scss';

type GalleryProps = {
    items: TypeGalleryItem [];
};

function Gallery({items}: GalleryProps): JSX.Element {
    return <ul className={styles.gallery}>{
        items.map(item => <GalleryItem key={item.link} item={item} variant='vertical'/>)
    }</ul>;
}

export default Gallery;