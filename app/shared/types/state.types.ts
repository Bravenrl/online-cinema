import { TypeUser } from "./user.types";

export type TypeUserState = {
  email: string;
  isAdmin: string;
};


export type TypeUserInitialState = {
  user: TypeUser | null;
  isLoading: boolean;
};


