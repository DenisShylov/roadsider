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

const useConstants = () => {
  //ACCESS TOKEN
  const access_token = useSelector(
    (state) => state.activeSession.session.access_token
  );
  //ADMINS
  const adminsNameCells = ['email', 'actions'];

  //COMPANIES
  const companiesNameCells = ['name', 'time_zone', 'actions'];

  //SESSION
  const SESSION_ATTRIBUTES = ['id', 'access_token'];

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
    SERVICE_TYPE,
    // TableCells,
  };
};

export default useConstants;
