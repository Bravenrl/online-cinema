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
        width={720}
        height={320}
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
