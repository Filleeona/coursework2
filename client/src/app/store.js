import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app/appReducer.js';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
