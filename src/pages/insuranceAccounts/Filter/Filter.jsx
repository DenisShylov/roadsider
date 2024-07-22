import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
// Local files
import { TextField } from '@mui/material';
import CompanyAutocomplete from '../../../components/common/CompanyAutocomplete/CompanyAutocomplete';
import useConstants from '../../../constants/Constants';
import { FiltersContainer } from '../../../components/ui/CommonStyles';

const Filter = ({ type, changeType, companyId, changeCompanyId }) => {
  const { SELECT_TYPE } = useConstants();

  const handleChangeType = ({ target: { value } }) => {
    const filteredType = SELECT_TYPE.filter((type) => type.label === value);

    changeType(filteredType);
  };
  return (
    <FiltersContainer>
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
          value={companyId}
          changeCompanyId={changeCompanyId}
          filter={true}
          sx={{ ml: '5px' }}
        />
      </Box>
    </FiltersContainer>
  );
};

export default Filter;
