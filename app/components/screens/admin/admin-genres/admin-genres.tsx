import Meta from '@/components/meta/meta';
import AdminHeader from '@/components/ui/admin/admin-header/admin-header';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import AdminTable from '@/components/ui/admin/admin-table/admin-table';
import Heading from '@/components/ui/heading/heading';

import { useGenres } from '@/hooks/query-hooks/use-genres';

import { HeaderItems } from '@/shared/data/admin.data';
import { MetaTitle } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

type AdminGenresProps = {};

function AdminGenres({}: AdminGenresProps): JSX.Element {
  const {
    handleSearch,
    searchTerm,
    isLoading,
    data: items,
    deleteAsync,
  } = useGenres();
  return (
    <>
      <Meta title={MetaTitle.AdminGenre} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.AdminGenres} />
        <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
        <AdminTable
          tableItems={items ?? []}
          headerItems={HeaderItems.Genres}
          isLoading={isLoading}
          removeHandler={deleteAsync}
        />
      </main>
    </>
  );
}

export default AdminGenres;
