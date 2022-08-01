import Image from 'next/image';

import styles from './banner.module.scss';

type BannerProps = {
  image: string;
  children?: JSX.Element | null;
};

function Banner({image, children}: BannerProps): JSX.Element {
  return (
    <div className={styles.banner}>
      <Image
        src={image}
        draggable={false}
        layout='fill'
        className={styles.image}
        unoptimized
        priority
        alt=''
      />
      {children}
    </div>
  );
}

export default Banner;
