import SearchField from '@/components/ui/search-field/search-field';
import { useSearch } from '@/hooks/query-hooks/use-search';


import SearchList from '../search-list/search-list';

import styles from './search.module.scss';

function Search(): JSX.Element {
  const { searchTerm, handleSearch, isSuccess, data } = useSearch();

  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {isSuccess && <SearchList movies={data || []}/>}
    </div>
  );
}
export default Search;
