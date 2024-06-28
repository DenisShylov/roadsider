import { TableCell, TableRow } from '@mui/material';
import _startCase from 'lodash/startCase';
import React, { useEffect, useState } from 'react';
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
import { BaseTableCell } from '../../components/common/baseTable/BaseTable.styled';

const Admins = () => {
  const { adminsNameCells, access_token } = useConstants();
  const { adminsList } = useAdmins();
  const [offset, setOffset] = useState(0);
  const { admins, pagination } = useSelector((state) => state.adminsList?.all);

  const { total_count } = pagination;
  //async request
  const { data, isLoading } = useGetAdminsListApiQuery({
    token: access_token,
    offset,
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
      <BaseTableCell key={name} sx={{ textAlign: textAlign }}>
        {_startCase(name)}
      </BaseTableCell>
    );
  });

  const bodyCells = admins.map(({ id, email }) => (
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
        offset={setOffset}
        total_count={total_count}
      />
    </MainContainer>
  );
};

export default Admins;
