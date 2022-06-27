import CountUsers from './count-users/count-users';
import PopularMovie from './popular-movie/popular-movie';
import styles from './statistic.module.scss';

type StatisticProps = {};

function Statistic({}: StatisticProps): JSX.Element {
  return (
    <div className={styles.statistic}>
      <CountUsers />
      <PopularMovie />
    </div>
  );
}

export default Statistic;
