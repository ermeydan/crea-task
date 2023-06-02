import { Product } from '@crea/ui/interfaces';

export interface ProductDetails extends Product {
  information: string;
  arrivalDate: string;
  commentsCount: number;
}
