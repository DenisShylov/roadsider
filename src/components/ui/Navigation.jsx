import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import _startCase from 'lodash/startCase';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//Local Files
import { useDeleteSessionApiMutation } from '../../redux/API/SessionAPI';
import logo from '../../assets/road.webp';
import { navItems } from '../../constants/Constants';
import { ImgContainer } from './Navigation.styles';
import { useSelector } from 'react-redux';
import useSession from '../../hooks/useSession';
const drawerWidth = 240;

const Navigation = () => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [deleteSessionApi] = useDeleteSessionApiMutation();
  const { access_token } = useSelector((state) => state.activeSession.session);
  const { createSession } = useSession();
  const handleHome = () => navigate('/');

  const handleLogout = async () => {
    await deleteSessionApi(access_token);
    createSession({ session: { id: '', platform_type: '', access_token: '' } });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">{screenSize && <Toolbar></Toolbar>}</AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          minWidth: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            p: '24px 0  8px 0 ',
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'rgb(63, 81, 181)',
            color: 'white',
            justifyContent: 'space-between',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <ImgContainer>
            <img
              src={logo}
              alt="roadsider logo"
              style={{ width: '120px', cursor: 'pointer' }}
              onClick={handleHome}
            />
          </ImgContainer>

          <List sx={{ pt: 2 }}>
            {navItems.map(({ key, name, icon }) => {
              if (name === 'Insurance Accounts') {
                name = 'insurance_accounts';
              }

              return (
                <NavLink
                  key={key}
                  to={`/${name.toLowerCase()}`}
                  style={({ isActive }) => ({
                    backgroundColor: isActive && 'rgb(101, 115, 195) ',
                    textDecoration: 'none',
                    color: 'white',
                  })}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: '#FFF', minWidth: '40px' }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={_startCase(name)} />
                  </ListItemButton>
                </NavLink>
              );
            })}
          </List>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            sx={{
              m: 0,
              color: 'white',
              bgcolor: 'rgb(48, 63, 159)',
              p: '6px 8px',
            }}
            onClick={handleLogout}
          >
            <ExitToAppIcon sx={{ ml: '-4px', mr: 1, fontSize: '20px' }} />{' '}
            Logout
          </Button>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navigation;
