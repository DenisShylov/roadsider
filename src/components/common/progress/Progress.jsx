import { Container } from './Progress.styled.jsx';
import { CircularProgress } from '@mui/material';
import React from 'react';

const Progress = () => {
  return (
    <Container>
      <CircularProgress size={100} />
    </Container>
  );
};

export default Progress;
