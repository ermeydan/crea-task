import React from 'react';
import { useAuth } from '@crea/ui/hooks';
import { Navigate, Outlet } from 'react-router-dom';

interface PublicRouteProps {
  component: React.ComponentType;
  redirect?: string;
  requiredQueryParams?: string | string[];
}

/**
 * To render the component, require the user to be unauthenticated.
 * If the user is authenticated, redirect them to the specified URL.
 */
export function PublicRoute({ component: Component, redirect = '/dashboard' }: PublicRouteProps) {
  const auth = useAuth();

  if (auth) {
    return <Navigate to={redirect} replace={true} />;
  }

  return Component ? <Component /> : <Outlet />;
}
