import cn from 'classnames';
import parse from 'html-react-parser';

import styles from './description.module.scss';

type DescriptionProps = {
  text: string;
  className: string;
};

function Description({ text, className }: DescriptionProps): JSX.Element {
  return (
    <div className={cn(className, styles.description)}>
      {parse(text)}
    </div>
  );
}

export default Description;
