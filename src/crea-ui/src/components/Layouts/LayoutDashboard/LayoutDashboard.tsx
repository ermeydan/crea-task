import { Outlet } from 'react-router-dom';

export function LayoutDashboard() {
  return (
    <div className="mantine-layout">
      <div className="mantine-layout-sidebar">
        sidebar
      </div>


      <div className="mantine-layout-content">
        header

        <Outlet />
      </div>
    </div>
  );
}
