import { useAppSelector } from './useAppSelector';
import { Nullable, ProductDetails } from '@crea/ui/interfaces';

export function useProductDetails(): Nullable<ProductDetails> {
  return useAppSelector((state) => state.ProductDetailsState.details);
}
