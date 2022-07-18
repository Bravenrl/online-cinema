

import GenreEdit from '@/components/screens/admin/genre-edit/genre-edit';
import { NextPageAuth } from '@/shared/types/auth.types';

const GenreEditPage: NextPageAuth = () => {
  return <GenreEdit />;
};

GenreEditPage.isOnlyAdmin = true;

export default GenreEditPage;
