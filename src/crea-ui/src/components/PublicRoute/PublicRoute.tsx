import { useToken } from '@crea/ui/hooks';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PublicRouteProps {
  component: React.ComponentType;
  redirect?: string;
}

/**
 * To render the component, require the user to be unauthenticated.
 * If the user is authenticated, redirect them to the specified URL.
 */
export function PublicRoute({ component: Component, redirect = '/products' }: PublicRouteProps) {
  const token = useToken();

  if (token) {
    return <Navigate to={redirect} replace={true} />;
  }

  return Component ? <Component /> : <Outlet />;
}
