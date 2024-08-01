import React, { useEffect, useState } from 'react';
import BaseTable from '../../components/common/baseTable/BaseTable';
import { useGetUsersQuery } from '../../redux/API/UsersAPI';
import useConstants from '../../constants/Constants';
import {
  FiltersContainer,
  MainContainer,
} from '../../components/ui/CommonStyles';
import useUsers from '../../hooks/useUsers';
import { useSelector } from 'react-redux';
import { Box, TableCell, TableRow } from '@mui/material';
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import { BaseTableCell } from '../../components/common/baseTable/BaseTable.styled';
import _startCase from 'lodash/startCase';
import BaseCreateBtn from '../../components/common/baseCreateBtn/BaseCreateBtn';
import UsersFilters from './Filter/UsersFilters';

const Users = () => {
  const { access_token, usersNameCells } = useConstants();
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState({ value: '' });
  const [roles, setRoles] = useState([]);
  const [companyId, setCompanyId] = useState({
    value: 'allCompanies',
    formattedValue: { id: 'allCompanies', name: 'All Companies' },
    error: '',
  });
  const [firstTimeOpen, setFirstTimeOpen] = useState(false);
  const { data, isLoading } = useGetUsersQuery({
    offset,
    company_id: companyId?.value?.id,
    query: query.value,
    token: access_token,
    roles,
  });

  const { getUsers } = useUsers();
  const usersList = useSelector((state) => state.usersList?.all?.users);
  const pagination = useSelector((state) => state.usersList?.all.pagination);
  const { total_count } = pagination;

  const handleChangeQuery = ({ target: { value: query } }) => {
    setFirstTimeOpen(true);
    setQuery({ value: query });
  };

  useEffect(() => {
    if (data) {
      getUsers(data);
    }
  }, [data, getUsers]);

  const handleChangeRole = ({ target: { value } }) => {
    console.log('ROLE VALUE', value);
    setRoles(value);
  };

  const headerCells = usersNameCells.map(({ id, value, align }) => {
    return (
      <BaseTableCell
        key={id}
        sx={{
          textAlign: align,
        }}
      >
        {_startCase(value)}
      </BaseTableCell>
    );
  });

  const bodyCells = usersList.map(
    ({ id, photo, roles, first_name, last_name, email }) => {
      return (
        <TableRow key={id}>
          <TableCell sx={{ textAlign: 'left' }}>{email}</TableCell>
          <TableCell sx={{ textAlign: 'center' }}>
            {`
          ${first_name} 
          ${last_name}`}
          </TableCell>
          <TableCell sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
            {roles.map((role) => role.toUpperCase()).join(',')}
          </TableCell>
          <TableCell sx={{ textAlign: 'center' }}>
            {photo?.representations ? (
              <img
                loading="lazy"
                height="100px"
                src={photo?.representations[0].url}
                alt={first_name}
              />
            ) : null}
          </TableCell>

          <TableCell sx={{ textAlign: 'right' }}>
            <BaseDetailsBtn />
            <BaseEditBtn />
          </TableCell>
        </TableRow>
      );
    }
  );
  return (
    <MainContainer>
      <Box sx={{ display: 'flex', mb: '10px' }}>
        <FiltersContainer sx={{ gap: '0.5rem' }}>
          <UsersFilters
            access_token={access_token}
            firstTimeOpen={firstTimeOpen}
            offset={offset}
            query={query}
            handleChangeQuery={handleChangeQuery}
            role={roles}
            handleChangeRole={handleChangeRole}
            addNewList={getUsers}
            companyId={companyId}
            changeCompanyId={setCompanyId}
          />
        </FiltersContainer>
        <BaseCreateBtn reason={'user'} />
      </Box>

      <BaseTable
        bodyCells={bodyCells}
        headerCells={headerCells}
        loading={isLoading}
        offset={setOffset}
        total_count={total_count}
      />
    </MainContainer>
  );
};

export default Users;
