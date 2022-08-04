import Link from 'next/link';

import { getUrl } from '@/utils/api.utils';

import { AppRoute } from '@/config/app.config';

import styles from '../auth-placeholder.module.scss';

type AuthButtonProps = {
  slug: string;
};

function AuthButton({ slug }: AuthButtonProps): JSX.Element {
  return (
    <Link
      href={{
        pathname: AppRoute.Auth,
        query: { redirect: getUrl(AppRoute.Movie, slug) },
      }}
    >
      <a className={styles.btn}>Sing in</a>
    </Link>
  );
}

export default AuthButton;
