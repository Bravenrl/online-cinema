import cn from 'classnames';
import { useQuery } from 'react-query';

import SkeletonLoader from '@/components/ui/skeleton-loader/skeleton-loader';

import { useCountUsers } from '@/hooks/query-hooks/use-user-count';

import styles from './count-users.module.scss';

type CountUsersProps = {};

function CountUsers({}: CountUsersProps): JSX.Element {
  const { data, isLoading } = useCountUsers();
  return (
    <div className={cn(styles.block, styles.wrapper, { [styles.count]: !!data })}>
      {isLoading ? (
        <SkeletonLoader className={styles.skeleton} />
      ) : (
        <>
          <p className={styles.number}>{data}</p>
          <p className={styles.description}>users</p>
        </>
      )}
    </div>
  );
}

export default CountUsers;
