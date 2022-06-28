import styles from './admin-table-header.module.scss';

type AdminTableHeaderProps = {
  items: string[];
};

function AdminTableHeader({ items }: AdminTableHeaderProps): JSX.Element {
  return (
    <div className={styles.header}>
      {items.map((item, index) => (
        <p key={`${index+item}`}>{item}</p>
      ))}
      <p>Actions</p>
    </div>
  );
}

export default AdminTableHeader;
