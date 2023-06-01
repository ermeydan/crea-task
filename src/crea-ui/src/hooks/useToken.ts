import { useAppSelector } from './useAppSelector';

export function useToken(): string {
  return useAppSelector((state) => state.AuthState.token);
}
