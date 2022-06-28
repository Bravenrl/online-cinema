import AdminUsers from '@/components/screens/admin/admin-users/admin-users';

import { NextPageAuth } from '@/shared/types/auth.types';

const UsersPage: NextPageAuth = () => {
  return <AdminUsers />;
};

UsersPage.isOnlyAdmin = true;

export default UsersPage;
