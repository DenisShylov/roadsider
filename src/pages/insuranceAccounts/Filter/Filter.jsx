import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import _startCase from 'lodash/startCase';
// Local files
import { TextField } from '@mui/material';
import CompanyAutocomplete from '../../../components/common/CompanyAutocomplete/CompanyAutocomplete';
import useConstants from '../../../constants/Constants';

const Filter = ({ type, changeType, companyId, changeCompanyId }) => {
  const { SELECT_TYPE } = useConstants();
  const handleChangeType = ({ target: { value } }) => {
    const filteredType = SELECT_TYPE.filter((type) => type.label === value);

    changeType(filteredType);
  };
  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Box sx={{ width: '25%' }}>
        <TextField
          fullWidth
          id={'selectType'}
          select
          value={type[0].label}
          label="Select type"
          onChange={handleChangeType}
        >
          {SELECT_TYPE.map(({ value, label }) => (
            <MenuItem key={value} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ width: '25%' }}>
        <CompanyAutocomplete
          value={companyId.formattedValue}
          changeCompanyId={changeCompanyId}
          filter={true}
        />
      </Box>
    </Box>
  );
};

export default Filter;
