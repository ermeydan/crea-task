import { useAppSelector } from './useAppSelector';
import { Nullable } from '@crea/ui/interfaces';

export function useToken(): Nullable<string> {
  return useAppSelector((state) => state.AuthState.token);
}
