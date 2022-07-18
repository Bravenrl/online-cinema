import Meta from '@/components/meta/meta';
import AdminHeader from '@/components/ui/admin/admin-header/admin-header';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import AdminTable from '@/components/ui/admin/admin-table/admin-table';
import Heading from '@/components/ui/heading/heading';

import { useActors } from '@/hooks/query-hooks/use-actors';

import { HeaderItems } from '@/shared/data/admin.data';
import { MetaTitle } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

type AdminActorsProps = {};

function AdminActors({}: AdminActorsProps): JSX.Element {
  const {
    handleSearch,
    searchTerm,
    isLoading,
    data: items,
    deleteAsync,
    createAsync,
  } = useActors();
  return (
    <>
      <Meta title={MetaTitle.AdminActor} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.AdminActors} />
        <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={createAsync}/>
        <AdminTable
          tableItems={items ?? []}
          headerItems={HeaderItems.Actors}
          isLoading={isLoading}
          removeHandler={deleteAsync}
        />
      </main>
    </>
  );
}

export default AdminActors;
