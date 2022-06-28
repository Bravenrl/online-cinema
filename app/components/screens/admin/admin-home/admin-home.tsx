import Meta from '@/components/meta/meta';
import AdminNavigation from '@/components/ui/admin/admin-navigation/admin-navigation';
import Heading from '@/components/ui/heading/heading';

import { MetaTitle } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

import Statistic from '../statistic/statistic';

type AdminHomeProps = {};

function AdminHome({}: AdminHomeProps): JSX.Element {
  return (
    <>
      <Meta title={MetaTitle.AdminHome} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.AdminHome} />
        <Statistic />
      </main>
    </>
  );
}

export default AdminHome;
