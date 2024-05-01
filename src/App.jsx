import { Outlet } from 'react-router-dom';
import Navigation from './components/ui/Navigation';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box>
      <Navigation />
      <Outlet />
    </Box>
  );
};

export default App;
