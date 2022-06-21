import { ChangeEvent, useState } from 'react';

import { Icon } from '@/shared/data/icon.data';

import MaterialIcon from '../material-icon/material-icon';

import styles from './search-field.module.scss';

type SearchFieldProps = {
    searchTerm: string;
    handleSearch: (evt: ChangeEvent<HTMLInputElement>) => void
};

function SearchField({searchTerm, handleSearch}: SearchFieldProps): JSX.Element {
  return (
    <div className={styles.search}>
      <MaterialIcon name={Icon.Search} />
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
export default SearchField;
