import { useAppSelector } from './useAppSelector';

export function useAuth(): string {
  return useAppSelector((state) => state.AuthState.token);
}
