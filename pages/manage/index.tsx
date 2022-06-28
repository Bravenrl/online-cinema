import AdminHome from '@/components/screens/admin/admin-home/admin-home';

import { NextPageAuth } from '@/shared/types/auth.types';

const AdminPage: NextPageAuth = () => {
  return <AdminHome />;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
