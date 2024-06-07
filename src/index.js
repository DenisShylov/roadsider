import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
//Local files
import { Provider } from 'react-redux';
import theme from './components/ui/Theme';
import './index.css';
import store from './redux/Store';
import { router } from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>
);
