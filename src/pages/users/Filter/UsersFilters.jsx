import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import _startCase from 'lodash/startCase';
// Local files
import useConstants from '../../../constants/Constants';
import { useLazyGetUsersQuery } from '../../../redux/API/UsersAPI';
import CompanyAutocomplete from '../../../components/common/CompanyAutocomplete/CompanyAutocomplete';
import { FiltersContainer } from '../../../components/ui/CommonStyles';
import { Label } from '@mui/icons-material';

const UsersFilters = ({
  offset,
  firstTimeOpen,
  query,
  companyId,
  changeCompanyId,
  handleChangeQuery,
  role,
  handleChangeRole,
  access_token,
  addNewList,
}) => {
  const { usersRoles } = useConstants();

  const [getUsersNameOrEmail, { data }] = useLazyGetUsersQuery();

  useEffect(() => {
    let timeout;

    if (firstTimeOpen) {
      timeout = setTimeout(
        () => {
          getUsersNameOrEmail({
            offset,
            query: query.value,
            token: access_token,
            roles: role,
          });
        },
        !!query ? 500 : 0
      );
      if (data) {
        addNewList(data);
      }
      return () => clearTimeout(timeout);
    }
  }, [firstTimeOpen, getUsersNameOrEmail, offset, access_token, query, data]);

  return (
    <>
      <TextField
        sx={{ width: '17%' }}
        id="enterNameOrEmail"
        value={query.value}
        onChange={handleChangeQuery}
        label="Enter name or email"
      />

      <CompanyAutocomplete
        value={companyId}
        changeCompanyId={changeCompanyId}
        sx={{ width: '17%' }}
      />
      <FormControl sx={{ width: '17%' }}>
        <InputLabel id="selectRolesLabel">Select roles</InputLabel>
        <Select
          labelId="selectRolesLabel"
          multiple
          fullWidth
          sx={{ width: '100%' }}
          id={'selectRoles'}
          input={<OutlinedInput label="Select roles" />}
          value={role}
          onChange={handleChangeRole}
        >
          {usersRoles.map(({ value }) => (
            <MenuItem key={value} value={value}>
              {_startCase(value)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default UsersFilters;
