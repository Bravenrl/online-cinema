import { AppRoute } from '@/config/app.config';
import { MenuTitle } from '@/config/menu.config';

import { TypeMenu, TypeMenuItem } from '../types/menu.types';

import { Icon } from './icon.data';

export const firstMenu: TypeMenu = {
  title: MenuTitle.Main,
  items: [
    {
      icon: Icon.Home,
      link: '/',
      title: 'Home',
    },
    {
      icon: Icon.Discovery,
      link: '/genres  ',
      title: 'Discovery',
    },
    {
      icon: Icon.FreshMovies,
      link: '/fresh',
      title: 'Fresh movies',
    },
    {
      icon: Icon.TrendingNow,
      link: '/trending',
      title: 'Trending Now',
    },
  ],
};

export const userMenu: TypeMenu = {
  title: MenuTitle.General,
  items: [],
};

export const ProfileMenuItem: TypeMenuItem = {
  icon: Icon.Profile,
  link: AppRoute.Profile,
  title: 'Profile',
};

export const LoginMenuItem: TypeMenuItem = {
  icon: Icon.Login,
  link: AppRoute.Auth,
  title: 'Login',
};

export const AdminMenuItem: TypeMenuItem = {
  icon: Icon.Admin,
  link: AppRoute.Manage,
  title: 'Admin panel',
};
