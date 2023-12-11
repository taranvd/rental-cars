import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6572d993192318b7db41205a.mockapi.io/api/';

export const fetchAdvert = createAsyncThunk(
  'advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/Advert');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
