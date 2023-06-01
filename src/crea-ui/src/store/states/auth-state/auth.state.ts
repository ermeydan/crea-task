import { AuthService } from '@crea/ui/services';
import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

const initialState: any = {
  token: null,
  username: null,
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
      const decoded: any = jwt_decode(payload.token);
      state.username = decoded.payload.username;
      state.token = payload.token;
    });
  },
});

export const { logoutAction } = AuthState.actions;
