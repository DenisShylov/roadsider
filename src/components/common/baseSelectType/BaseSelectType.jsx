import { Box, MenuItem, TextField } from '@mui/material';
import React from 'react';

const BaseSelectType = ({ type, selectType, handleChangeType, sx }) => {
  console.log('BASE_SELECT_TYPE TYPE', type);

  return (
    <Box sx={sx}>
      <TextField
        sx={{ width: '25%' }}
        id={'selectType'}
        select
        value={type[0].label}
        label="Select type"
        onChange={handleChangeType}
      >
        {selectType.map(({ value, label }) => (
          <MenuItem key={value} value={label}>
            {label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default BaseSelectType;
