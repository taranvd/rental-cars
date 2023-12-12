import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './advertSlice';
import { carFilterReducer } from './carFilterSlice';
import { favoritesReducer } from './favoriteSlice';

export const store = configureStore({
  reducer: {
    adverts: advertReducer,
    carFilter: carFilterReducer,
    favorites: favoritesReducer,
  },
});
