import cn from 'classnames';

import MaterialIcon from '../../material-icon/material-icon';

import styles from './slide-arrow.module.scss';

type SlideArrowProps = {
  variant: 'left' | 'right';
  clickHandler: () => void;
};

function SlideArrow({ variant, clickHandler }: SlideArrowProps): JSX.Element {
  const isLeft = variant === 'left';

  return (
    <button
      onClick={clickHandler}
      className={cn(styles.arrow, {
        [styles.left]: isLeft,
        [styles.right]: !isLeft,
      })}
    >
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  );
}

export default SlideArrow;
