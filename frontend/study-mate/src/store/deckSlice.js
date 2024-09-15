import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/apiClient';

export const fetchDecks = createAsyncThunk('decks/fetchDecks', async () => {
  const response = await api.get('/decks');
  return response.data;
});

const deckSlice = createSlice({
  name: 'decks',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDecks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDecks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDecks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default deckSlice.reducer;
