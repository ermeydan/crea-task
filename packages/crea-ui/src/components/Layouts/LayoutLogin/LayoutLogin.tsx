import './LayoutLogin.scss';
import React from 'react';

export function LayoutLogin({ children }: React.PropsWithChildren) {
  return <div className="page-login-layout">{children}</div>;
}
