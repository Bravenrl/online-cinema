import Image from 'next/image';
import { useRouter } from 'next/router';

import { TypeSlide } from '@/shared/types/slider.types';

import styles from '../slider.module.scss';
import { RefObject } from 'react';

type SlideItemProps = {
  slide: TypeSlide;
  buttonTitle?: string;
  nodeRef: RefObject<HTMLDivElement>
};

function SlideItem({ buttonTitle, slide, nodeRef }: SlideItemProps): JSX.Element {
  const { push } = useRouter();
  return (
    <div className={styles.slide} ref={nodeRef}>
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
        <h3 className={styles.heading}> {slide.title} </h3>
        <h4 className={styles.sub_heading}> {slide.subTitle} </h4>
        <button className={styles.button} onClick={() => push(slide.link)}>
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}

export default SlideItem;
