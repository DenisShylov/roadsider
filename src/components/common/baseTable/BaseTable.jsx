import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const BaseTable = ({ headerCells, bodyCells }) => {
  return (
    <TableContainer component={Paper} sx={{ margin: 'auto' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>{headerCells}</TableRow>
        </TableHead>
        <TableBody>{bodyCells}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
