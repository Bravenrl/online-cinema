import { Reducer } from "@/config/store.config";
import { TypeUser } from "@/shared/types/user.types";
import { TypeRootState } from "../root-reducer";

export const getUser = (state: TypeRootState): TypeUser | null => state[Reducer.User].user;

export const getUserIsLoading = (state: TypeRootState): boolean => state[Reducer.User].isLoading;