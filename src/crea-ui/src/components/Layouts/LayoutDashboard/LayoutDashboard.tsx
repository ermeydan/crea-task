import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';
import { LayoutHeader, LayoutFooter } from './components';

export function LayoutDashboard() {
  return (
    <div className="page-dashboard">
      <LayoutHeader />

      <div className="page-dashboard-content">
        <Container>
          <Outlet />
        </Container>
      </div>

      <LayoutFooter />
    </div>
  );
}
