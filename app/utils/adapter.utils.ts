import { TypeAdminTableItem } from '@/shared/types/admin.types';
import { TypeMenuItem } from '@/shared/types/menu.types';
import { TypeGenre } from '@/shared/types/movie.types';
import { TypeUserProfileResponse } from '@/shared/types/user.types';

import { AppRoute } from '@/config/app.config';

import { getUrl } from './api.utils';
import { convertMongoDate } from './date.utils';

export const adaptPopularGenreData = (genre: TypeGenre) => {
  return {
    icon: genre.icon,
    link: getUrl(AppRoute.Genre, genre.slug),
    title: genre.name,
  } as TypeMenuItem;
};

export const adaptUserToTableItem = (
  user: TypeUserProfileResponse
): TypeAdminTableItem => ({
  _id: user._id,
  editUrl: AppRoute.Manage + AppRoute.User + AppRoute.Edit + `/${user._id}`,
  items: [user.email, convertMongoDate(user.createdAt)],
});
