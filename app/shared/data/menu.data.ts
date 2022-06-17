import { TypeMenu } from '../types/menu.types';

export const firstMenu: TypeMenu = {
  title: 'Menu',
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
  title: 'General',
  items: [],
};
