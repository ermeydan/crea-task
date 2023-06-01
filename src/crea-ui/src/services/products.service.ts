import { axiosBaseQuery } from './base.service';
import { HttpMethod } from '@crea/ui/enums';
import { createApi } from '@reduxjs/toolkit/query/react';

export const ProductsService = createApi({
  reducerPath: 'AuthService',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    products: builder.query<any, void>({
      query: () => ({
        url: '/products',
        method: HttpMethod.GET,
      }),
    }),
  }),
});

export const { useLazyProductsQuery, useProductsQuery } = ProductsService;
