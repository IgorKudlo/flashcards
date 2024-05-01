import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import { Decks, MainLayout } from '@/pages';
import { CheckEmail, CreatePassword, ForgotPassword, Profile, SignIn, SignUp } from '@/components/auth';

const publicRoutes: RouteObject[] = [
  {
    path: '/auth/sign-in',
    element: <SignIn />
  },
  {
    path: '/auth/sign-up',
    element: <SignUp />
  },
  {
    path: '/auth/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/auth/check-email',
    element: <CheckEmail />
  },
  {
    path: '/auth/create-password',
    element: <CreatePassword />
  },
  {
    path: '/auth/profile',
    element: <Profile />
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