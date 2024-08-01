import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import { TableCell, TableRow } from '@mui/material';
import _startCase from 'lodash/startCase';
import BaseDetailsBtn from '../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../components/common/baseEditBtn/BaseEditBtn';

export const navItems = [
  {
    key: uuid(),
    name: 'admins',
    icon: <SupervisorAccountIcon />,
  },
  { key: uuid(), name: 'companies', icon: <LocationCityIcon /> },
  { key: uuid(), name: 'insurance_accounts', icon: <BusinessIcon /> },
  { key: uuid(), name: 'users', icon: <AccountCircleIcon /> },
  { key: uuid(), name: 'profile', icon: <PersonIcon /> },
  { key: uuid(), name: 'dispatches', icon: <LocalShippingIcon /> },
  { key: uuid(), name: 'library', icon: <LibraryBooksIcon /> },
];

export const reasons = {
  ADMIN: 'admin',
  BASIC_CHARGE: 'basic_charge',
  FEE_CHARGE: 'fee_charge',
  COMPANY: 'company',
  DIGITAL_DISPATCH_INSURANCE_ACCOUNT: 'digital_dispatch_insurance_account',
  URGENTLY_INSURANCE_ACCOUNT: 'urgently_insurance_account',
  DISPATCH: 'dispatch',
  SERVICE: 'service',
  TYPE: 'type',
  USER: 'user',
};

const useConstants = () => {
  //ACCESS TOKEN
  const access_token = useSelector(
    (state) => state.activeSession.session.access_token
  );
  //ADMINS
  const adminsNameCells = ['email', 'actions'];
  const ADMINS_ATTRIBUTES = ['id', 'email'];

  //COMPANIES
  const companiesNameCells = ['name', 'time_zone', 'actions'];

  //SESSION
  const SESSION_ATTRIBUTES = ['id', 'access_token'];

  //INSURANCE_ACCOUNTS
  const insuranseAccountsNameCells = [
    'name',
    'client_id',
    'contact_name',
    'contact_phone',
    'provider_name',
    'provider_phone',
    'logged_in',
    'actions',
  ];

  const SELECT_TYPE = [
    { value: 'digital_dispatch_insurance_account', label: 'Digital Dispatch' },
    { value: 'urgently_insurance_account', label: 'Urgently' },
  ];

  // USERS
  const usersRoles = [
    { id: uuid(), value: 'driver' },
    { id: uuid(), value: 'manager' },
    { id: uuid(), value: 'owner' },
  ];

  const usersNameCells = [
    { id: uuid(), value: 'email', align: 'left' },
    { id: uuid(), value: 'name', align: 'center' },
    { id: uuid(), value: 'roles', align: 'center' },
    { id: uuid(), value: 'photo', align: 'center' },
    { id: uuid(), value: 'actions', align: 'right' },
  ];

  // LIBRARY
  const SERVICE_TYPE = {
    services: 'basic',
    additional: 'additional',
  };
  // const TableCells = (thead, tbody, name,time_zone,) => {
  //   const headerCells = thead.map((name, index) => {
  //     let textAlign = null;
  //     if (index === companiesNameCells.length - 1) {
  //       textAlign = 'right';
  //     }
  //     return (
  //       <TableCell
  //         key={name}
  //         sx={{ color: 'white', flexGrow: 1, textAlign: textAlign }}
  //       >
  //         {_startCase(name)}
  //       </TableCell>
  //     );
  //   });

  //   const bodyCells = tbody.map(({ id,name,time_zone }) => {

  //     return (
  //       <TableRow key={id}>
  //         <TableCell>{name}</TableCell>
  //         <TableCell>{time_zone}</TableCell>
  //         <TableCell sx={{ textAlign: 'right' }}>
  //           <BaseDetailsBtn />
  //           <BaseEditBtn />
  //         </TableCell>
  //       </TableRow>
  //     );
  //   });

  //   return { headerCells, bodyCells };
  // };
  return {
    access_token,
    adminsNameCells,
    companiesNameCells,
    SESSION_ATTRIBUTES,
    ADMINS_ATTRIBUTES,
    SERVICE_TYPE,
    insuranseAccountsNameCells,
    SELECT_TYPE,
    usersRoles,
    usersNameCells,
    // TableCells,
  };
};

export default useConstants;
