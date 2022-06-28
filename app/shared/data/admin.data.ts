import { AppRoute } from '@/config/app.config';

import { TypeAdminNavItem } from '../types/admin.types';

export const adminNavItems: TypeAdminNavItem[] = [
  {
    title: 'Statistic',
    link: AppRoute.Manage,
  },
  {
    title: 'Users',
    link: AppRoute.Manage + AppRoute.AUsers,
  },
  {
    title: 'Movies',
    link: AppRoute.Manage + AppRoute.AMovies,
  },
  {
    title: 'Actors',
    link: AppRoute.Manage + AppRoute.AActors,
  },
  {
    title: 'Genres',
    link: AppRoute.Manage + AppRoute.AGenres,
  },
];

export const HeaderItems = {
  Users: ['Email', 'Date register'],
}
