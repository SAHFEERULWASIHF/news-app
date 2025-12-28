import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import { newsApi } from '../api/newsApi';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;