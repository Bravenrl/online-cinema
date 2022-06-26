export type TypeUserAuth = {
  email: string;
  password: string;
};

export type TypeUser = {
  _id: string;
  email: string;
  isAdmin: boolean;
};

export type TypeTokens = {
  accessToken: string;
  refreshToken: string;
};

export type TypeUserAdmin = TypeUserAuth & {
  isAdmin: boolean;
};

export type TypeUserAuthResponse = TypeTokens & {
  user: TypeUser;
};

export type TypeUserProfileResponse = TypeUser & {
  password: string;
  favorites: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
