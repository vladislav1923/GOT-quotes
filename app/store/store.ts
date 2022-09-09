/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Theme } from 'react-toggle-theme';
import { State } from '../interfaces/state';
import { initialState } from '../constants/initial-state';

export const appSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    updateTheme: (state: State, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    updateFeedback: (state: State, action: PayloadAction<boolean>) => {
      state.isFeedback = action.payload;
    },
    updateNotification: (state: State, action: PayloadAction<string | null>) => {
      state.notification = action.payload;
    },
  },
});

export const { updateTheme, updateFeedback, updateNotification } = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
