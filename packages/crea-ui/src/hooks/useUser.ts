import { useAppSelector } from './useAppSelector';
import { Nullable, User } from '@crea/ui/interfaces';

export function useUser(): Nullable<User> {
  return useAppSelector((state) => state.AuthState.user);
}
