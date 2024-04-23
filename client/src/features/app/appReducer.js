import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPets } from '../../api/api.js';

const fetchPets = createAsyncThunk('app/fetchPets', async () => {
  return getPets();
});

export const appSlice = createSlice({
  name: 'app',
  initialState: { pets: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchPets.fulfilled, (state, { payload }) => {
      state.pets = payload;
    });
  },
});

export { fetchPets };

export default appSlice.reducer;
