import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/errorPage/ErrorPage';
import Profile from '../pages/profile/Profile';
import Signin from '../pages/signIn/Signin';
import Admins from '../pages/admins/Admins';
import Companies from '../pages/companies/Companies';
import ProtectedRoutes from './ProtectedRoutes';
import InsuranceAccounts from '../pages/insuranceAccounts/InsuranceAccounts';
import Users from '../pages/users/Users';
import Dispatches from '../pages/dispatches/Dispatches';
import Library from '../pages/library/Library';

export const router = createBrowserRouter([
  {
    path: '/sign_in',
    element: <Signin />,
  },
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
        element: <InsuranceAccounts />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/dispatches',
        element: <Dispatches />,
      },
      {
        path: '/library',
        element: <Library />,
      },
    ],
  },
]);
