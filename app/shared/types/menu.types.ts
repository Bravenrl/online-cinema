import { TypeMaterialIcon } from './icon.types';

export type TypeMenuItem = {
  icon: TypeMaterialIcon;
  title: string;
  link: string;
};

export type TypeMenu = {
  title: string;
  items: TypeMenuItem[];
};
