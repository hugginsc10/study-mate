import { configureStore } from '@reduxjs/toolkit';
import deckReducer from './deckSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    decks: deckReducer,
    auth: authReducer,
  },
});