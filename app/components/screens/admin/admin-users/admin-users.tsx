import Meta from '@/components/meta/meta';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import Heading from '@/components/ui/headings/heading/heading';

import { MetaTitle } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';
import AdminHeader from '@/components/ui/admin/admin-header/admin-header';
import { useUsers } from '@/hooks/query-hooks/use-users';
import AdminTable from '@/components/ui/admin/admin-table/admin-table';
import { HeaderItems } from '@/shared/data/admin.data';


type AdminUsersProps = {};

function AdminUsers({}: AdminUsersProps): JSX.Element {
  const {handleSearch, searchTerm, isLoading, data: items, deleteAsync} = useUsers();
  return (
    <>
      <Meta title={MetaTitle.AdminUsers} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.AdminUsers} />
        <AdminHeader searchTerm={searchTerm} handleSearch = {handleSearch}/>
        <AdminTable tableItems={items ?? []} headerItems={HeaderItems.Users} isLoading={isLoading} removeHandler={deleteAsync}/>
      </main>
    </>
  );
}

export default AdminUsers;
