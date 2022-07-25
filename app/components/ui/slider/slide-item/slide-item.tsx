import Image from 'next/image';
import { useRouter } from 'next/router';

import { TypeSlide } from '@/shared/types/slider.types';

import styles from '../slider.module.scss';

type SlideItemProps = {
  slide: TypeSlide;
  buttonTitle?: string;
};

function SlideItem({ buttonTitle, slide }: SlideItemProps): JSX.Element {
  const { push } = useRouter();
  return (
    <div className={styles.slide}>
      {slide.bigPoster && (
        <Image
          layout='fill'
          className={styles.image}
          src={slide.bigPoster}
          alt={slide.title}
          unoptimized
          priority
        />
      )}

      <div className={styles.content}>
        <h2 className={styles.heading}> {slide.title} </h2>
        <h3 className={styles.sub_heading}> {slide.subTitle} </h3>
        <button className={styles.button} onClick={() => push(slide.link)}>
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}

export default SlideItem;
