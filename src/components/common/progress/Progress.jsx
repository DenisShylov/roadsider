import { CircularProgress } from '@mui/material';
import React from 'react';
//Local Files
import { Container } from './Progress.styled.jsx';

const Progress = () => {
  return (
    <Container>
      <CircularProgress size={100} />
    </Container>
  );
};

export default Progress;
