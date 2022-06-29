import AdminGenres from '@/components/screens/admin/admin-genres/admin-genres';

import { NextPageAuth } from '@/shared/types/auth.types';

const GenresPage: NextPageAuth = () => {
  return <AdminGenres />;
};

GenresPage.isOnlyAdmin = true;

export default GenresPage;
