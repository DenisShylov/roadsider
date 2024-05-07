import { TableCell, TableRow } from '@mui/material';
import _startCase from 'lodash/startCase';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
//Local files
import BaseCreateBtn from '../../components/common/baseCreateBtn/BaseCreateBtn';
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import BaseTable from '../../components/common/baseTable/BaseTable';
import { MainContainer } from '../../components/ui/CommonStyles';
import useConstants from '../../constants/Constants';
import useAdmins from '../../hooks/useAdmins';
import { useGetAdminsListApiQuery } from '../../redux/API/AdminsAPI';

const Admins = () => {
  const { adminsNameCells, access_token } = useConstants();
  const { adminsList } = useAdmins();
  const list = useSelector((state) => state.adminsList?.all?.data);
  //async request
  const { data, isLoading } = useGetAdminsListApiQuery({
    access_token,
  });

  useEffect(() => {
    const getAdmins = () => {
      if (data) {
        adminsList(data);
      }
    };
    getAdmins();
  }, [data, adminsList]);

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

  const bodyCells = list.map(({ id, email }) => (
    <TableRow key={id}>
      <TableCell>{email}</TableCell>

      <TableCell sx={{ textAlign: 'right' }}>
        <BaseDetailsBtn />
        <BaseEditBtn />
      </TableCell>
    </TableRow>
  ));

  return (
    <MainContainer component="main">
      <BaseCreateBtn />

      <BaseTable
        loading={isLoading}
        headerCells={headerCells}
        bodyCells={bodyCells}
      />
    </MainContainer>
  );
};

export default Admins;
