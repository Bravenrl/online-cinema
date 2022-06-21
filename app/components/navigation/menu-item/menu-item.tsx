import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MaterialIcon from '@/components/ui/material-icon.tsx/material-icon';

import { TypeMenuItem } from '@/shared/types/menu.types';

import styles from './menu-item.module.scss';

type MenuItemProps = {
  item: TypeMenuItem;
};
function MenuItem({ item }: MenuItemProps): JSX.Element {
  const { asPath } = useRouter();
  const {icon, link, title} = item;

  return (
    <li
      className={cn({
        [styles.item]: true,
        [styles.active]: asPath === link,
      })}
    >
      <Link href={link}>
        <a>
          <MaterialIcon name={icon} />
          <span>{title}</span>
        </a>
      </Link>
    </li>
  );
}
export default MenuItem;
