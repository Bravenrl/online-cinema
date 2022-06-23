import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...rest }: ButtonProps): JSX.Element {
  return (
    <button className={cn(styles.button)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
