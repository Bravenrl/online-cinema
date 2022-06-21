import Logo from './logo/logo';
import MenuContainer from './menu-container/menu-container';
import styles from './navigation.module.scss';

function Navigation(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </nav>
  );
}
export default Navigation;
