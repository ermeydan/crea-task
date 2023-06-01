import React from 'react';

import './LayoutLogin.scss';

export function LayoutLogin({ children }: React.PropsWithChildren) {
  return <div className="page-login-layout">{children}</div>;
}
