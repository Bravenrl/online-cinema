import { HeadingClassName } from '@/config/heading.config';
import cn from 'classnames';

import styles from './heading.module.scss';

type HeadingProps = {
  title: string;
  className?: string;
};

function Heading({ title, className }: HeadingProps): JSX.Element {
  return (
    <h1
      className={cn({
        [styles.default]: true,
        [styles.home]: className === HeadingClassName.Home,
      })}
    >
      {title}
    </h1>
  );
}
export default Heading;
