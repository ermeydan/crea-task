import { AppDispatch } from '@crea/ui/store';
import { useDispatch } from 'react-redux';

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
