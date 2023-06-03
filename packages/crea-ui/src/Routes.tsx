import { LayoutDashboard, NotFound, ProtectedRoute, PublicRoute } from '@crea/ui/components';
import loadable from '@loadable/component';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

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
            <Route path=":id" element={<ProductDetails />} />
            <Route index={true} element={<Products />} />
          </Route>
        </Route>

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
