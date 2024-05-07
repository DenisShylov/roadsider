import { Box, Button, styled } from '@mui/material';

export const CreateBtnContainer = styled(Box)(({ theme }) => ({
  padding: '0 0 16px',
  marginLeft: 'auto',
}));
export const CreateBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  margin: 0,
}));
