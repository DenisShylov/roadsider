import { TableCell, TableRow } from '@mui/material';
import _startCase from 'lodash/startCase';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BaseCreateBtn from '../../components/common/baseCreateBtn/BaseCreateBtn';
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import BaseTable from '../../components/common/baseTable/BaseTable';
import { MainContainer } from '../../components/ui/CommonStyles';
import useConstants from '../../constants/Constants';
import useCompanies from '../../hooks/useCompanies';
import { useGetCompaniesQuery } from '../../redux/API/CompaniesAPI';
import { BaseTableCell } from '../../components/common/baseTable/BaseTable.styled';

const Companies = () => {
  const { access_token, companiesNameCells } = useConstants();
  const [offset, setOffset] = useState(0);
  const { data, isLoading } = useGetCompaniesQuery({
    token: access_token,
    offset,
  });
  const pagination = useSelector(
    (state) => state.companiesList?.all.pagination
  );
  const { total_count } = pagination;
  const { companiesList } = useCompanies();
  const companiesDataStore = useSelector(
    (state) => state.companiesList?.all?.companies
  );

  useEffect(() => {
    const addResponseCompanies = () => {
      if (data) {
        companiesList(data);
      }
    };
    addResponseCompanies();
  }, [data, companiesList]);

  const headerCells = companiesNameCells.map((name, index) => {
    let textAlign = null;
    if (index === companiesNameCells.length - 1) {
      textAlign = 'right';
    }
    return (
      <BaseTableCell key={name} sx={{ textAlign: textAlign }}>
        {_startCase(name)}
      </BaseTableCell>
    );
  });

  const bodyCells = companiesDataStore.map(({ id, name, time_zone }) => (
    <TableRow key={id}>
      <TableCell>{name}</TableCell>
      <TableCell>{time_zone}</TableCell>

      <TableCell sx={{ textAlign: 'right' }}>
        <BaseDetailsBtn />
        <BaseEditBtn />
      </TableCell>
    </TableRow>
  ));

  return (
    <MainContainer>
      <BaseCreateBtn />
      <BaseTable
        loading={isLoading}
        bodyCells={bodyCells}
        headerCells={headerCells}
        offset={setOffset}
        total_count={total_count}
      />
    </MainContainer>
  );
};

export default Companies;
