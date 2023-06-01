import React from 'react';
import { useToken } from '@crea/ui/hooks';
import { Navigate, Outlet } from 'react-router-dom';

export type ProtectedRouteProps = Partial<{
  component: React.ComponentType;
  redirect: string;
}>;

/**
 * To render the component, require the user to be authenticated.
 * If the user is not authenticated, redirect them to the specified URL.
 */
export function ProtectedRoute({
  component: Component,
  redirect = '/login',
}: React.PropsWithChildren<ProtectedRouteProps>) {
  const token = useToken();

  /*
   * If token doesn't exist, redirect to /login by default
   */
  if (!token) {
    return <Navigate to={redirect} replace={true} />;
  }

  /*
   * If everything is valid then render the route component or outlet
   */
  return Component ? <Component /> : <Outlet />;
}
