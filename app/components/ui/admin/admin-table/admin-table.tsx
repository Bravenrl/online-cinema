import { TypeAdminTableItem } from '@/shared/types/admin.types';

import SkeletonLoader from '../../skeleton-loader/skeleton-loader';

import AdminTableHeader from './admin-table-header/admin-table-header';
import AdminTableItem from './admin-table-item/admin-table-item';
import styles from './admin-table.module.scss';

type AdminTableProps = {
  tableItems: TypeAdminTableItem[];
  headerItems: string[];
  isLoading: boolean;
  removeHandler: (id: string) => void;
};

function AdminTable({
  tableItems,
  headerItems,
  isLoading,
  removeHandler,
}: AdminTableProps): JSX.Element {
  return (
    <div>
      <AdminTableHeader items={headerItems} />

      {isLoading ? (
        <SkeletonLoader count={1} height={40} className={styles.loader} />
      ) : tableItems.length ? (
        tableItems.map((tableItem) => (
          <AdminTableItem
            item={tableItem}
            key={tableItem._id}
            removeHandler={()=>removeHandler(tableItem._id)}
          />
        ))
      ) : (
        <p className={styles.not_found}>Elements not found</p>
      )}
    </div>
  );
}

export default AdminTable;
