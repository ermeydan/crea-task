import loadable from '@loadable/component';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutDashboard, NotFound, ProtectedRoute, PublicRoute } from '@crea/ui/components';

const Login = loadable(() => import('./pages/Login/Login'));
const Logout = loadable(() => import('./pages/Logout/Logout'));
const Dashboard = loadable(() => import('./pages/Dashboard/Dashboard'));

export function RouteProviders() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route path="/logout" element={<PublicRoute component={Logout} />} />

        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route element={<LayoutDashboard />}>
            <Route index={true} element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
