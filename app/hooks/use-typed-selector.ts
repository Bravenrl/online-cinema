import { TypeRootState } from "@/store/root-reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector 