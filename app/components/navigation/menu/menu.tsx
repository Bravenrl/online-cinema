import { MenuTitle } from '@/config/menu.config';
import { TypeMenu } from '@/shared/types/menu.types';
import AuthItems from '../auth/auth-items';
import MenuItem from '../menu-item/menu-item';
import styles from './menu.module.scss';

type MenuProps = {
  menu: TypeMenu;
}

function Menu({menu}:MenuProps): JSX.Element {
  const {title, items} = menu;
  return (<nav className={styles.menu}>
    <h3 className={styles.heading}>{title}</h3>
    <ul className={styles.ul}>
      {items.map(item => 
        <MenuItem item = {item} key = {item.link}/>
        )}
      {title === MenuTitle.General ? <AuthItems /> : null}
    </ul>
    </nav>);
}
export default Menu;
