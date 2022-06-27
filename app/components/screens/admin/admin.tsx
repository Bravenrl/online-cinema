import Heading from '@/components/ui/heading/heading';
import Meta from '@/components/meta/meta';
 
import { MetaTitle } from '@/shared/data/meta.data';

import { HeadingTitle } from '@/config/heading.config';

import AdminNavigation from '../../ui/admin-navigation/admin-navigation';

import styles from './admin.module.scss';
import Statistic from './statistic/statistic';

type AdminProps = {};

function Admin({}: AdminProps): JSX.Element {
  return (
    <>
      <Meta title={MetaTitle.Admin} />
      <main>
        <AdminNavigation />
        <Heading title={HeadingTitle.Admin} />
        <Statistic />
      </main>
    </>
  );
}

export default Admin;
