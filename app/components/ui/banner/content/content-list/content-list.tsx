import Link from 'next/link';

import { TypeLink } from '@/shared/types/assets.types';

import styles from './content-list.module.scss';

type ContentListProps = {
  name: string;
  links: TypeLink[];
};

function ContentList({ name, links }: ContentListProps): JSX.Element {
  return (
    <div className={styles.list}>
      <h3 className={styles.name}>{name}</h3>
      <ul>
        {links.map((link, index) => (
          <li className={styles.links} key={link._id}>
            <Link href={link.link}>
              <a>{link.title}</a>
            </Link>
            {index + 1 !== links.length ? ',' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;
