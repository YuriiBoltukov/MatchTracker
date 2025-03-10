import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './matchSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    matches: matchReducer,
  },
});
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
