import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      dark: '#303f9f',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: 'rgba(18, 18, 18, 1)', //#121212
      secondary: 'rgba(104, 106, 109, 1)', //#686A6D
      hint: 'rgba(161, 164, 170, 1)', //#A1A4AA
      disabled: 'rgba(161, 164, 170, 1)', //#A1A4AA
    },
    background: {
      default: '#fff',
      accent: '#F7F8FD',
    },
    divider: 'rgba(121, 153, 174, 1)',
    border: {
      default: 'rgba(121, 153, 174, 1)', //border card and tables
    },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
    h4: {
      // Form Title
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#225082',
    },
    h5: {
      // appbar title
    },
    h6: {
      fontWeight: 600,
    },
    caption: {
      color: 'rgba(161, 164, 170, 1)', //text.hint
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

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(63, 81, 181)',
        },
      },
    },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'white',
    //     },
    //   },
    // },
  },
});

export default theme;
