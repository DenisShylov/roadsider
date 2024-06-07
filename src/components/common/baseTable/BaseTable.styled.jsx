import { Box, TableCell, styled } from '@mui/material';

export const ColumnContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
}));

export const BaseTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));
