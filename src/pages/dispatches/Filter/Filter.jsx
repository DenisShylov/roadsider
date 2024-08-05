import React from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { FiltersContainer } from '../../../components/ui/CommonStyles';
import BaseSelectType from '../../../components/common/baseSelectType/BaseSelectType';
import useConstants from '../../../constants/Constants';
import { Checkbox, FormControlLabel } from '@mui/material';

const Filter = ({
  query,
  changeQuery,
  type,
  changeType,
  validationError,
  changeValidationError,
  changeFirstTimeOpen,
}) => {
  const { SELECT_TYPE } = useConstants();
  const styleSelectType = {
    ml: '0.3rem',
    width: '100%',
  };
  const handleChangeType = ({ target: { value } }) => {
    const filteredType = SELECT_TYPE.filter((type) => type.label === value);

    changeType(filteredType);
  };
  return (
    <FiltersContainer sx={{ mb: '10px' }}>
      <FormControl variant="outlined" sx={{ width: '25%' }}>
        <InputLabel htmlFor="search">Search</InputLabel>
        <OutlinedInput
          id="search"
          label="Search"
          value={query}
          onChange={({ target: { value } }) => {
            changeQuery((prev) => ({ ...prev, value }));
            changeFirstTimeOpen(true);
          }}
        />
      </FormControl>
      <BaseSelectType
        sx={styleSelectType}
        type={type}
        selectType={SELECT_TYPE}
        handleChangeType={handleChangeType}
      />
      <FormControlLabel
        control={<Checkbox />}
        checked={validationError}
        onChange={({ target: { checked } }) => changeValidationError(checked)}
        label="With validation errors"
      />
    </FiltersContainer>
  );
};

export default Filter;
