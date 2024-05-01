import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import { Decks, Login, MainLayout } from '@/pages';

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
  },
  {
    path: '/decks',
    element: <Decks />
  }
];

function PrivateRoutes() {
  const isAuthenticated = true;

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