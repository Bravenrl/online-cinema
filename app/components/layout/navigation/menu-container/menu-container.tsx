import { firstMenu, userMenu } from '@/shared/data/menu.data';

import Menu from '../menu/menu';

import styles from './menu-container.module.scss';

function MenuContainer(): JSX.Element {
  return (
    <div>
      <Menu menu={firstMenu} />
      <Menu menu={userMenu} />
    </div>
  );
}
export default MenuContainer;
