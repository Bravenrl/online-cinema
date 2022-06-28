import { ChangeEvent } from 'react';

import Button from '../../button/button';
import SearchField from '../../search-field/search-field';
import AdminCreateButton from '../admin-create-button/admin-create-button';

import styles from './admin-header.module.scss';

type AdminHeaderProps = {
  onClick?: () => void;
  searchTerm: string;
  handleSearch: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function AdminHeader({
  onClick,
  handleSearch,
  searchTerm,
}: AdminHeaderProps): JSX.Element {
  return (
    <div className={styles.header}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {onClick && (
        <Button className={styles.button} onClick={onClick}>
          Create new
        </Button>
      )}
    </div>
  );
}

export default AdminHeader;
