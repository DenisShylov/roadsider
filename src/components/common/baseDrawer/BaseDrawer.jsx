import {
  Box,
  Button,
  Drawer,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { CustomIconBtn } from '../../../pages/signIn/Signin.styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { checkValidEmail } from '../../../helpers/validationEmail';

const BaseDrawer = ({ open = false, onClose }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // if (!checkValidEmail(email.value)) {
  //   setEmail({ ...email, error: 'Email can`t be empty' });
  // }
  const handleEmail = ({ target: { value } }) => {
    setEmail((prev) => ({ ...prev, value }));
  };
  const handlePhone = ({ target: { value } }) => {
    if (phone.length >= 15) {
      return null;
    }
    setPhone(value);
  };
  const handlePassword = ({ target: { value } }) => setPassword(value);
  const handleRepeatPassword = ({ target: { value } }) =>
    setRepeatPassword(value);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const theme = useTheme();

  return (
    <Drawer
      anchor={'right'}
      open={open}
      sx={{ display: 'flex' }}
      PaperProps={{ style: { width: '500px' } }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            padding: '12px 16px',
            minHeight: '64px',
          }}
        >
          <Button onClick={onClose} sx={{ color: theme.palette.text.disabled }}>
            Cancel
          </Button>
        </Box>
        <Typography variant="h4" textAlign="center">
          Create Admin
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: '8px 16px 32px',
        }}
      >
        <FormControl margin="dense">
          <TextField
            id="email"
            value={email.value}
            onChange={handleEmail}
            error={!!email.error}
            helperText={email.error}
            placeholder="Email"
          ></TextField>
        </FormControl>
        <FormControl margin="dense">
          <TextField
            id="phone"
            value={phone}
            onChange={handlePhone}
            placeholder="Phone"
          ></TextField>
        </FormControl>
        <FormControl
          margin="dense"
          sx={{ width: 'inherit' }}
          variant="outlined"
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            fullWidth
            id=" password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePassword}
            endAdornment={
              <InputAdornment position="end" sx={{ color: 'blue' }}>
                <CustomIconBtn
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </CustomIconBtn>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl
          margin="dense"
          sx={{ width: 'inherit' }}
          variant="outlined"
        >
          <InputLabel htmlFor="repeatPassword">Repeat Password</InputLabel>
          <OutlinedInput
            fullWidth
            id=" repeatPassword"
            type={showPassword ? 'text' : 'password'}
            value={repeatPassword}
            onChange={handleRepeatPassword}
            endAdornment={
              <InputAdornment position="end" sx={{ color: 'blue' }}>
                <CustomIconBtn
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </CustomIconBtn>
              </InputAdornment>
            }
            label="Repeat Password"
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          padding: '12px 16px',
        }}
      >
        <Button
          variant="contained"
          sx={{ width: '100%', maxWidth: '200px', padding: '16px 24px' }}
        >
          submit
        </Button>
      </Box>
    </Drawer>
  );
};

export default BaseDrawer;
