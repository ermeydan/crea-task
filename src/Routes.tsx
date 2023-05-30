import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export function RouteProviders() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </BrowserRouter>
  )
}
