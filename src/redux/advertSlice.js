import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvert } from './operations';

const initialState = {
  items: [],
  filter: null,
  favorite: false,
  isLoading: false,
  error: null,
  totalCount: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
  state.totalCount = action.payload.totalCount;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdvert.pending, handlePending)
      .addCase(fetchAdvert.fulfilled, handleFulfilled)
      .addCase(fetchAdvert.rejected, handleRejected);
  },
});

export const advertReducer = advertSlice.reducer;
