import AdminActors from '@/components/screens/admin/admin-actors/admin-actors';

import { NextPageAuth } from '@/shared/types/auth.types';

const ActorsPage: NextPageAuth = () => {
  return <AdminActors />;
};

ActorsPage.isOnlyAdmin = true;

export default ActorsPage;
