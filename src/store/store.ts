import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AuthState } from './states';

const STATES = {
  AuthState,
};

export const store = configureStore({
  reducer: combineReducers({
    AuthState: AuthState.reducer,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = Pick<ReturnType<typeof store.getState>, StateKeys>;
export type StateKeys = keyof typeof STATES;
