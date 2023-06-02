import { useAppSelector } from './useAppSelector';
import { Comment, Nullable } from '@crea/ui/interfaces';

export function useProductComments(): Nullable<Comment[]> {
  return useAppSelector((state) => state.ProductDetailsState.comments);
}
