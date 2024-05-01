import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/errorPage/ErrorPage';
import Profile from '../pages/profile/Profile';
import Signin from '../pages/signIn/Signin';
import Admins from '../pages/admins/Admins';
import Companies from '../pages/companies/Companies';
import ProtectedRoutes from './ProtectedRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <App />,
      </ProtectedRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/admins',
        element: <Admins />,
      },
      {
        path: '/companies',
        element: <Companies />,
      },
      {
        path: '/insurance_accounts',
        element: <div>insurance_accounts</div>,
      },
      {
        path: '/users',
        element: <div>users</div>,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/dispatches',
        element: <div>dispatches</div>,
      },
      {
        path: '/library',
        element: <div>library</div>,
      },
    ],
  },
  {
    path: '/sign_in',
    element: <Signin />,
  },
]);
