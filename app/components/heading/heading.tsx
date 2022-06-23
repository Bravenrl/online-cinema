import cn from 'classnames';

import { HeadingClassName } from '@/config/heading.config';

import styles from './heading.module.scss';

type HeadingProps = {
  title: string;
  className?: string;
};

function Heading({ title, className }: HeadingProps): JSX.Element {
  return <h1 className={cn(styles.default, {
    [styles.home]: className === HeadingClassName.Home,
    [styles.auth]: className === HeadingClassName.Auth,
  })}>{title}</h1>;
}
export default Heading;
