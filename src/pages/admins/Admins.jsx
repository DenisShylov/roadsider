import { Box, CircularProgress, TableCell, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import BaseTable from '../../components/common/baseTable/BaseTable';
import { adminsNameCells } from '../../constants/Constants';
import _startCase from 'lodash/startCase';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import { useSelector } from 'react-redux';
import { useGetAdminsListApiQuery } from '../../redux/API/AdminsAPI';
import useAdmins from '../../hooks/useAdmins';
const Admins = () => {
  const { adminsList } = useAdmins();
  const { access_token } = useSelector((state) => state.activeSession.session);
  const list = useSelector((state) => state.adminsList);
  const { responseAdmins, isLoading } = useGetAdminsListApiQuery({
    access_token,
    limit: 25,
    offset: 0,
  });

  useEffect(() => {
    adminsList(responseAdmins);
  }, [responseAdmins, adminsList]);
  console.log(responseAdmins);

  if (isLoading) {
    <CircularProgress />;
  }
  const headerCells = adminsNameCells.map((name, index) => {
    let textAlign = null;
    if (index === adminsNameCells.length - 1) {
      textAlign = 'right';
    }
    return (
      <TableCell
        key={name}
        sx={{ color: 'white', flexGrow: 1, textAlign: textAlign }}
      >
        {_startCase(name)}
      </TableCell>
    );
  });

  const bodyCells = list?.admins
    ? list.admins
    : [].map((list) => (
        <TableRow key={list?.id}>
          <TableCell>{list?.email}</TableCell>

          <TableCell sx={{ textAlign: 'right' }}>
            <BaseDetailsBtn />
            <BaseEditBtn />
          </TableCell>
        </TableRow>
      ));
  return (
    <Box component="main" sx={{ ml: '240px', p: 3, display: 'flex' }}>
      <BaseTable headerCells={headerCells} bodyCells={bodyCells} />
    </Box>
  );
};

export default Admins;
