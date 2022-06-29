import Meta from '@/components/meta/meta';
import AdminHeader from '@/components/ui/admin/admin-header/admin-header';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import AdminTable from '@/components/ui/admin/admin-table/admin-table';
import Heading from '@/components/ui/heading/heading';

import { useMovies } from '@/hooks/query-hooks/use-movies';

import { HeaderItems } from '@/shared/data/admin.data';
import { MetaTitle } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

type AdminMoviesProps = {};

function AdminMovies({}: AdminMoviesProps): JSX.Element {
  const {
    handleSearch,
    searchTerm,
    isLoading,
    data: items,
    deleteAsync,
  } = useMovies();
  return (
    <>
      <Meta title={MetaTitle.AdminMovie} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.AdminMovies} />
        <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
        <AdminTable
          tableItems={items ?? []}
          headerItems={HeaderItems.Movies}
          isLoading={isLoading}
          removeHandler={deleteAsync}
        />
      </main>
    </>
  );
}

export default AdminMovies;