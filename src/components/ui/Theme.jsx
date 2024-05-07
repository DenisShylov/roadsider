import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(63, 81, 181)',
    },
  },

  // Defauld components
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          '&:hover': {
            backgroundColor: 'inherit',
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          letterSpacing: 'normal',
          margin: '4px 0 4px 0',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          height: '80vh',
          width: '100%',
          border: '2px solid rgb(63, 81, 181)',
          borderRadius: '6px',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(63, 81, 181)',
        },
      },
    },
  },
});

export default theme;
