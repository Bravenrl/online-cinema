import { firstMenu, userMenu } from '@/shared/data/menu.data';
import GenreMenu from '../genre-menu/genre-menu';

import Menu from '../menu/menu';

import styles from './menu-container.module.scss';

function MenuContainer(): JSX.Element {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  );
}
export default MenuContainer;
