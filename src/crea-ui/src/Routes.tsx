import loadable from '@loadable/component';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutDashboard, NotFound, ProtectedRoute, PublicRoute } from '@crea/ui/components';

const Login = loadable(() => import('./pages/Login/Login'));
const Logout = loadable(() => import('./pages/Logout/Logout'));
const Products = loadable(() => import('./pages/Products/Products'));
const ProductDetails = loadable(() => import('./pages/ProductDetails/ProductDetails'));

export function RouteProviders() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route path="/logout" element={<PublicRoute component={Logout} />} />

        <Route path="/products" element={<ProtectedRoute />}>
          <Route element={<LayoutDashboard />}>
            <Route path=":slug" element={<ProductDetails />} />
            <Route index={true} element={<Products />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
