import { Box, Button, styled } from '@mui/material';

export const MainContainer = styled(Box)(({ theme }) => ({
  marginLeft: '240px',
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));

export const TableCellButtons = styled(Button)({
  margin: 0,
});
