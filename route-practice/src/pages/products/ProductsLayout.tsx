import { Outlet } from 'react-router-dom';

export default function ProductsLayout() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <Outlet />
    </div>
  );
}
