import { axiosBaseQuery } from './base.service';
import { HttpMethod } from '@crea/ui/enums';
import { Comment, Product, Nullable, ProductDetails } from '@crea/ui/interfaces';
import { createApi } from '@reduxjs/toolkit/query/react';

export const ProductsService = createApi({
  reducerPath: 'AuthService',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    products: builder.query<Product[], void>({
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
        url: `/comments/${productId}`,
        method: HttpMethod.GET,
      }),
    }),

    sendComment: builder.mutation<Comment, { productId: string; text: string; score: number }>({
      query: ({ productId, text, score }) => ({
        url: `/comments/${productId}`,
        method: HttpMethod.POST,
        data: {
          productId,
          text,
          score,
        },
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
  useSendCommentMutation,
} = ProductsService;
