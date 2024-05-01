import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
// Local Files
import {
  BackBtn,
  BtnContainer,
  ErrorBox,
  LinkBtnStyle,
} from './ErrorRoutesPage.styles';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Container component={'section'}>
      <ErrorBox>
        <Typography variant="h1">{error.status}</Typography>
        <Typography variant="h3">{error.statusText}</Typography>
        <BtnContainer>
          <Link to={'/'} style={LinkBtnStyle}>
            <BackBtn />
            Go to Home
          </Link>
        </BtnContainer>
      </ErrorBox>
    </Container>
  );
};

export default ErrorPage;
