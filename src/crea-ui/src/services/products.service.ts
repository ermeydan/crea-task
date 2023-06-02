import { axiosBaseQuery } from './base.service';
import { HttpMethod } from '@crea/ui/enums';
import { Comment, Nullable, ProductDetails } from '@crea/ui/interfaces';
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

    getProduct: builder.query<ProductDetails, { productId: string }>({
      query: ({ productId }) => ({
        url: `/products/${productId} `,
        method: HttpMethod.GET,
      }),
    }),

    getProductComments: builder.query<Nullable<Comment[]>, { productId: string }>({
      query: ({ productId }) => ({
        url: `/comments/${productId} `,
        method: HttpMethod.GET,
      }),
    }),
  }),
});

export const {
  useLazyProductsQuery,
  useProductsQuery,
  useLazyGetProductQuery,
  useGetProductQuery,
  useLazyGetProductCommentsQuery,
} = ProductsService;
