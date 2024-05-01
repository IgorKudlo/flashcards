import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import { Login, MainLayout } from '@/pages';

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  }
];

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>hello</div>
  }
];

function PrivateRoutes() {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes
      },
      ...publicRoutes
    ]
  }
]);


export const Router = () => {
  return <RouterProvider router={router} />;
};