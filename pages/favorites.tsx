import { NextPageAuth } from '@/shared/types/auth.types';

import FavoriteCatalog from '@/components/screens/favorite-catalog/favorite-catalog';

const FavoritesPage: NextPageAuth = () => <FavoriteCatalog />;

FavoritesPage.isOnlyAuthUser = true;

export default FavoritesPage;
