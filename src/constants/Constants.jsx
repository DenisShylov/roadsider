import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import { v4 as uuid } from 'uuid';

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

export const adminsNameCells = ['email', 'actions'];

export const SESSION_ATTRIBUTES = ['id', 'access_token'];
