import { Comment, Nullable, ProductDetails } from '@crea/ui/interfaces';
import { ProductsService } from '@crea/ui/services';
import { createSlice } from '@reduxjs/toolkit';

export interface ProductDetailsStateType {
  details: Nullable<ProductDetails>;
  comments: Nullable<Comment[]>;
}

const initialState: ProductDetailsStateType = {
  details: null,
  comments: null,
};

export const ProductDetailsState = createSlice({
  name: 'ProductDetailsState',
  initialState: initialState,
  reducers: {
    resetProductDetailsAction: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(ProductsService.endpoints.getProduct.matchFulfilled, (state, { payload }) => {
      state.details = payload;
    });

    builder.addMatcher(ProductsService.endpoints.getProductComments.matchFulfilled, (state, { payload }) => {
      state.comments = payload;
    });
  },
});

export const { resetProductDetailsAction } = ProductDetailsState.actions;
