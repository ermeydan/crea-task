import { LayoutFooter, LayoutHeader } from './components';
import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

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
