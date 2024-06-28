import { TableCell, TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import Progress from '../progress/Progress';
import { ColumnContainer } from './BaseTable.styled';

const BaseTable = ({
  total_count,
  loading,
  headerCells,
  bodyCells,
  offset,
}) => {
  const [page, setPage] = useState(0);

  const onChangePage = (_, newPage) => {
    if (newPage !== page) {
      setPage(newPage);
      offset((prev) => prev + 25);
    }
  };

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
        count={total_count}
        page={total_count <= 25 ? 0 : page}
        onPageChange={onChangePage}
        rowsPerPage={25}
        rowsPerPageOptions={[25]}
      />
    </ColumnContainer>
  );
};

export default BaseTable;
