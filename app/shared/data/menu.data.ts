import { MenuTitle } from '@/config/menu.config';
import { TypeMenu } from '../types/menu.types';

export const firstMenu: TypeMenu = {
  title: MenuTitle.Main,
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home',
    },
    {
      icon: 'MdExplore',
      link: '/genres  ',
      title: 'Discovery',
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh movies',
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending Now',
    },
  ],
};

export const userMenu: TypeMenu = {
  title: MenuTitle.General,
  items: [],
};
