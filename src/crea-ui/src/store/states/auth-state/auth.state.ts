import { createSlice } from '@reduxjs/toolkit';
import { AuthService } from '@crea/ui/services';
import jwt_decode from "jwt-decode";

const initialState: any = {
  token: null,
  username: null,
};

export const AuthState = createSlice({
  name: 'AuthState',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(AuthService.endpoints.login.matchFulfilled, (state, { payload }) => {
      const decoded: any = jwt_decode(payload.token);
      state.username = decoded.payload.username;
      state.token = payload.token;
    });
  },
});
