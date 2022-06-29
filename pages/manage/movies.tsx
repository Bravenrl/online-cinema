import AdminMovies from '@/components/screens/admin/admin-movies/admin-movies';

import { NextPageAuth } from '@/shared/types/auth.types';

const MoviesPage: NextPageAuth = () => {
  return <AdminMovies />;
};

MoviesPage.isOnlyAdmin = true;

export default MoviesPage;
