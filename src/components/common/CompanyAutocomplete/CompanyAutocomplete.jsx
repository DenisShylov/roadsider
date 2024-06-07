import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import useConstants from '../../../constants/Constants';
import { useLazyGetCompaniesQuery } from '../../../redux/API/CompaniesAPI';

const CompanyAutocomplete = (value, changeCompanyId, filter) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  const { access_token } = useConstants();
  const [getCompanies, { data, isLoading, isSuccess }] =
    useLazyGetCompaniesQuery();

  const isOptionEqualToValue = (option, value) => option?.name === value?.name;

  const getOptionLabel = (option) => option.name;

  useEffect(() => {
    if (data) return;

    const fetchingCompanies = async () => {
      if (open && !data) {
        await getCompanies({
          params: {
            access_token,
            orders: { name: 'asc' },
            limit: 25,
            offset: 0,
            attributes: [
              'id',
              'locations',
              'name',
              'time_zone',
              'commission_value',
              'mileage_calculation',
              'stripe_account_id',
              'stripe_charges_enabled',
              'subscription_expired_at',
            ],
          },
        });
      }
    };

    fetchingCompanies();
  }, [open, data, isSuccess, getCompanies, access_token]);

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
            {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
            {params.InputProps.endAdornment}
          </React.Fragment>
        ),
      }}
    />
  );
  return (
    <Autocomplete
      freeSolo
      sx={{ ml: '5px' }}
      open={open}
      value={value.value}
      onChange={({ target: { value } }) =>
        changeCompanyId({
          value,
          formattedValue: { id: 'allCompanies', name: 'All Companies' },
          error: '',
        })
      }
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      options={
        !filter
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
