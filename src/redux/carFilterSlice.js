import { createSlice } from '@reduxjs/toolkit';

const carFilterSlice = createSlice({
  name: 'carFilter',
  initialState: {},
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilter } = carFilterSlice.actions;

export const carFilterReducer = carFilterSlice.reducer;
