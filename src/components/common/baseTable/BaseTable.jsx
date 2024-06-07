import { TableCell, TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import Progress from '../progress/Progress';
import { ColumnContainer } from './BaseTable.styled';

const BaseTable = ({ loading, headerCells, bodyCells }) => {
  return (
    <ColumnContainer>
      <TableContainer component={Paper} sx={{ margin: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {loading ? <TableCell></TableCell> : headerCells}
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell>
                  <Progress />
                </TableCell>
              </TableRow>
            ) : (
              bodyCells
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={bodyCells?.length}
        page={0}
        onPageChange={(e) => e + 1}
        rowsPerPage={-1}
        rowsPerPageOptions={[]}
      />
    </ColumnContainer>
  );
};

export default BaseTable;
