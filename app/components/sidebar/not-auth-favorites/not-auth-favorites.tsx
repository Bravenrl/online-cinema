import styles from './not-auth-favorites.module.scss';

function NotAuthFavorites(): JSX.Element {
  return (<p className={styles.no_auth}>For viewing favorites plz authorize!</p>);
}

export default NotAuthFavorites;
