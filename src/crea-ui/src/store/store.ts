import { AuthState } from './states';
import { AuthService, ProductsService } from '@crea/ui/services';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const STATES = {
  AuthState,
};

const REDUCERS = {
  AuthState: AuthState.reducer,
};

const MIDDLEWARES = [AuthService.middleware, ProductsService.middleware];

const SERVICES = {
  [AuthService.reducerPath]: AuthService.reducer,
  [ProductsService.reducerPath]: ProductsService.reducer,
};

const COMBINED_REDUCERS = combineReducers({
  ...SERVICES,
  ...REDUCERS,
});

const persistedReducer = persistReducer(
  {
    key: 'crea',
    version: 1,
    storage,
  },
  COMBINED_REDUCERS,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(MIDDLEWARES),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = Pick<ReturnType<typeof store.getState>, StateKeys>;
export type StateKeys = keyof typeof STATES;
