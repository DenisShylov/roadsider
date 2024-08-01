import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import _trim from 'lodash/trim';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Local files
import logo from '../../assets/road.webp';
import {
  CustomIconBtn,
  LoginBtn,
  Logo,
  ResendBtn,
  SigninContainer,
} from './Signin.styles';

import { useCreateSessionApiMutation } from '../../redux/API/SessionAPI';

import useSession from '../../hooks/useSession';
import { usePostTwoFactorMutation } from '../../redux/API/TwoFactorAuth';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleEmail = ({ target: { value } }) => setEmail(value);
  const handlePassword = ({ target: { value } }) => setPassword(value);
  const [requestSession, { data, isLoading }] = useCreateSessionApiMutation();
  const [postRequestTwoFactor] = usePostTwoFactorMutation();
  const { createSession } = useSession();
  const [confirmationCode, setConfirmationCode] = useState('');
  const [twoFactor, setTwoFactor] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [status, setStatus] = useState(false);
  const intervalRef = useRef();
  console.log('REF', intervalRef);

  useEffect(() => {
    const timer = () => {
      setSeconds((sec) => sec - 1);

      if (seconds === 0) {
        setStatus(false);
        setSeconds(60);
      }
    };

    intervalRef.current = setInterval(() => {
      if (status) {
        timer();
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [status, seconds]);

  const handleLogin = async () => {
    const userData = {
      confirmation_code: confirmationCode,
      email: _trim(email),
      password,
    };
    setTwoFactor(true);
    setStatus(true);
    await postRequestTwoFactor(userData).unwrap();
    if (confirmationCode) {
      await requestSession(userData).unwrap();
    }
  };
  const handleConfirmationCode = ({ target: { value } }) =>
    setConfirmationCode(value);

  useEffect(() => {
    const test = () => {
      if (data) {
        console.log('DATA', data);
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

        {twoFactor && (
          <>
            <FormControl sx={{ width: 'inherit', mb: 3 }} variant="outlined">
              <InputLabel htmlFor="confirmationCode">
                Enter Confirmation Code
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="confirmationCode"
                value={confirmationCode}
                onChange={handleConfirmationCode}
              />
            </FormControl>

            <FormControl sx={{ width: 'inherit' }} variant="outlined">
              <ResendBtn
                onClick={handleLogin}
                variant="outlined"
                disabled={status}
              >
                {status ? `Resend in ${seconds} seconds` : 'Resend'}
              </ResendBtn>
            </FormControl>
          </>
        )}
        <LoginBtn
          onClick={handleLogin}
          variant="contained"
          disabled={isLoading}
        >
          Log In
        </LoginBtn>
      </Box>
    </SigninContainer>
  );
};

export default Signin;
