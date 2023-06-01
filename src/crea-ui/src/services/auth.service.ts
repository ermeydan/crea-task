import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './base.service';
import { HttpMethod } from '@crea/ui/enums';

export const AuthService = createApi({
  reducerPath: 'AuthService',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<
      any,
      { username: string; password: string }
    >({
      query: ({ username, password }) => ({
        url: '/login',
        method: HttpMethod.POST,
        data: {
          username,
          password,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = AuthService;
