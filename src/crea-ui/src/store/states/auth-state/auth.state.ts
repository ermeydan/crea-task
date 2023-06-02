import { Nullable, User } from '@crea/ui/interfaces';
import { AuthService } from '@crea/ui/services';
import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

export interface AuthStateType {
  user: User;
  token: Nullable<string>;
}

const initialState: AuthStateType = {
  token: null,
  user: null as unknown as User,
};

export const AuthState = createSlice({
  name: 'AuthState',
  initialState: initialState,
  reducers: {
    logoutAction: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(AuthService.endpoints.login.matchFulfilled, (state, { payload }) => {
      const decoded: User = jwt_decode(payload.token);
      state.user = decoded;
      state.token = payload.token;
    });
  },
});

export const { logoutAction } = AuthState.actions;
