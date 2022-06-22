import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from './root-reducer';

export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
});
