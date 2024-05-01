import { Button, Container, IconButton, styled } from '@mui/material';

export const SigninContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '16px 16px 160px',
}));
export const LoginBtn = styled(Button)({
  margin: 0,
  minHeight: '64px',
  marginTop: '40px',
  minWidth: '64px',
  width: 'inherit',
});

export const Logo = styled('img')({
  marginBottom: '60px',
});

export const CustomIconBtn = styled(IconButton)({
  padding: '12px',
  marginRight: '4px',
  color: 'rgb(63, 81, 181)',
});
