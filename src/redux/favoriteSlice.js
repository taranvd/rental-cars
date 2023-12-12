import { createSlice } from '@reduxjs/toolkit';

const getInitialFavorites = () =>
  JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getInitialFavorites(),
  reducers: {
    addToFavorites: (state, action) => {
      const existingCar = state.find(car => car.id === action.payload.id);
      if (!existingCar) {
        state.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      const carIndex = state.findIndex(car => car.id === action.payload);
      if (carIndex !== -1) {
        state.splice(carIndex, 1);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
