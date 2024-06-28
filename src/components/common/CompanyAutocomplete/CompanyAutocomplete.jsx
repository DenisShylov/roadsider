import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import useConstants from '../../../constants/Constants';
import { useLazyGetCompaniesQuery } from '../../../redux/API/CompaniesAPI';

const CompanyAutocomplete = ({ value, changeCompanyId, filter, sx }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');
  const [firstTimeOpen, setFirstTimeOpen] = useState(false);

  const { access_token } = useConstants();
  const [getCompanies, { data, isLoading, isSuccess }] =
    useLazyGetCompaniesQuery();
  console.log('VALUE-COMPANY-ID', value);
  console.log('CHANGE-COMPANY-ID', changeCompanyId);
  const onInputChange = (_, value) => {
    firstTimeOpen && setQuery(value);
  };

  const isOptionEqualToValue = (option, value) => option?.id === value?.id;

  const getOptionLabel = (option) => option.name;

  const onOpen = () => {
    setOpen(true);
    if (!firstTimeOpen) {
      setFirstTimeOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let timeout;

    if (query === 'All Companies') return;

    if (firstTimeOpen) {
      timeout = setTimeout(
        () => {
          getCompanies({ token: access_token, query });
        },
        !!query ? 500 : 0
      );
      return () => clearTimeout(timeout);
    }
  }, [firstTimeOpen, getCompanies, access_token, query]);

  useEffect(() => {
    isSuccess && setOptions([...data.companies]);
  }, [isSuccess, data]);

  const renderOption = (props, option) => {
    return (
      <div key={option.id}>
        <li {...props}>{option.name}</li>
      </div>
    );
  };

  const renderInput = (params) => (
    <TextField
      {...params}
      label="Select company"
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <React.Fragment>
            {!!isLoading ? (
              <CircularProgress color="inherit" size={20} />
            ) : null}
            {params.InputProps.endAdornment}
          </React.Fragment>
        ),
      }}
    />
  );
  return (
    <Autocomplete
      freeSolo
      sx={sx}
      open={open}
      value={value.formattedValue}
      onChange={(_, selectValue) =>
        changeCompanyId({
          value: selectValue,
          formattedValue: {
            ...(selectValue
              ? { id: selectValue.id, name: selectValue.name }
              : { id: '', name: '' }),
          },
          error: '',
        })
      }
      onInputChange={onInputChange}
      onOpen={onOpen}
      onClose={onClose}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      options={
        filter
          ? [{ id: 'allCompanies', name: 'All Companies' }, ...options]
          : options
      }
      renderOption={renderOption}
      loading={isLoading}
      renderInput={renderInput}
    />
  );
};

export default CompanyAutocomplete;
