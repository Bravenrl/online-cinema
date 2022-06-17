import Image from 'next/image';
import Link from 'next/link';

import logoImage from '@/assets/images/logo.svg';

import styles from './logo.module.scss';

function Logo(): JSX.Element {
  return (
    <Link href='/'>
      <a className={styles.logo}>
        <Image
          src={logoImage}
          width={247}
          height={34}
          alt='Online-cinema'
          draggable={false}
        />
      </a>
    </Link>
  );
}
export default Logo;
