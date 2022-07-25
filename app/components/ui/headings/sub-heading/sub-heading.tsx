import styles from './sub-heading.module.scss';

type SubHeadingProps = {
  title: string;
};

function SubHeading({ title }: SubHeadingProps): JSX.Element {
  return <h2 className={styles.sub_heading}>{title}</h2>;
}

export default SubHeading;
