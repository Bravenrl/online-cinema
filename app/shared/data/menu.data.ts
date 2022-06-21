import { MenuTitle } from '@/config/menu.config';
import { TypeMenu } from '../types/menu.types';
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
