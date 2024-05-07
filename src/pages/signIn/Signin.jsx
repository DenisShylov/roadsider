import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import _trim from 'lodash/trim';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Local files
import logo from '../../assets/road.webp';
import {
  CustomIconBtn,
  LoginBtn,
  Logo,
  SigninContainer,
} from './Signin.styles';

import { useCreateSessionApiMutation } from '../../redux/API/SessionAPI';

import useSession from '../../hooks/useSession';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleEmail = ({ target: { value } }) => setEmail(value);
  const handlePassword = ({ target: { value } }) => setPassword(value);
  const [requestSession, { data, isLoading }] = useCreateSessionApiMutation();
  const { createSession } = useSession();

  const handleLogin = async () => {
    const session = {
      session: { platform_type: 'web' },
      email: _trim(email),
      password,
      attributes: ['id', 'platform_type', 'access_token'],
    };

    await requestSession(session).unwrap();
  };

  useEffect(() => {
    const test = () => {
      if (data) {
        createSession(data);
        navigate('/admins');
      }
    };
    test();
  }, [createSession, data, navigate]);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <SigninContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '340px',
        }}
      >
        <Logo src={logo} alt="logo" width="100px" height="auto" />
        <FormControl sx={{ width: 'inherit', mb: 3 }} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            fullWidth
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </FormControl>
        <FormControl sx={{ width: 'inherit', mb: 3 }} variant="outlined">
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
        <LoginBtn onClick={handleLogin} variant="contained">
          {isLoading ? <CircularProgress sx={{ color: 'black' }} /> : 'Log In'}
        </LoginBtn>
      </Box>
    </SigninContainer>
  );
};

export default Signin;
