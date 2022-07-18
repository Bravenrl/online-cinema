import { TypeAdminTableItem } from '@/shared/types/admin.types';

import AdminActions from '../admin-actions/admin-actions';

import styles from './admin-table-item.module.scss';

type AdminTableItemProps = {
  item: TypeAdminTableItem;
  removeHandler: () => void;
};

function AdminTableItem({
  item: { items, editUrl, _id },
  removeHandler,
}: AdminTableItemProps): JSX.Element {
  return (
    <div className={styles.item}>
      {items.map((item, index) => (
        <div key={`${_id}${item}${index}`}>{item}</div>
      ))}
      <AdminActions editUrl={editUrl} removeHandler={removeHandler} />
    </div>
  );
}

export default AdminTableItem;
