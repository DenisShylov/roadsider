import { Box, TableCell, TableRow } from '@mui/material';
import _startCase from 'lodash/startCase';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//Local files
import BaseCreateBtn from '../../components/common/baseCreateBtn/BaseCreateBtn';
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import BaseTable from '../../components/common/baseTable/BaseTable';
import { BaseTableCell } from '../../components/common/baseTable/BaseTable.styled';
import { MainContainer } from '../../components/ui/CommonStyles';
import useConstants from '../../constants/Constants';
import useInsuranceAccounts from '../../hooks/useInsuranceAccounts';
import { useGetInsuranseAccQuery } from '../../redux/API/InsuranceAccAPI';
import Filter from './Filter/Filter';

const InsuranceAccounts = () => {
  const { SELECT_TYPE } = useConstants();
  const [type, setType] = useState(SELECT_TYPE);
  const [offset, setOffset] = useState(0);
  const pagination = useSelector(
    (state) => state.insuranceList?.all.pagination
  );
  const { total_count } = pagination;
  const [companyId, setCompanyId] = useState({
    value: 'allCompanies',
    formattedValue: { id: 'allCompanies', name: 'All Companies' },
    error: '',
  });

  const { access_token, insuranseAccountsNameCells } = useConstants();
  const { insuranceAccountsList } = useInsuranceAccounts();
  const insuranceAccList = useSelector(
    (state) => state.insuranceList?.all?.data
  );

  const { data, isLoading } = useGetInsuranseAccQuery({
    access_token,
    ...(!companyId && { company_id: companyId.formattedValue.id }),
    limit: 25,
    offset,
    orders: { name: 'asc' },
    insurance_accountable_type: type[0].value,
    attributes: [
      'id',
      'location',
      'insurance_accountable_type',
      'name',
      'provider_name',
      'provider_phone',
      'order_auto_acceptance',
      'logged_in',
      {
        company: [
          'id',
          'name',
          'locations',
          'commission_value',
          'mileage_calculation',
          'stripe_account_id',
          'stripe_charges_enabled',
          'subscription_expired_at',
        ],
      },
      {
        insurance_accountable: [
          'client_id',
          'contractor_id',
          'location_id',
          'tax_id',
          'contact_name',
          'contact_phone',
          'username',
          'password',
          'digital_dispatch_logged_in',
          'digital_dispatch_token',
          'provider_email',
          'description',
          'categories',
          'vehicle_types',
          'urgently_registered',
        ],
      },
    ],
  });

  const handleChangeCompanyId = (newValue) => {
    setCompanyId(newValue);
  };
  useEffect(() => {
    if (data) {
      insuranceAccountsList(data);
    }
  }, [data, insuranceAccountsList]);

  const headerCells = insuranseAccountsNameCells.map((name, index) => {
    let textAlign = null;
    if (index === insuranseAccountsNameCells.length - 1) {
      textAlign = 'right';
    }
    return (
      <BaseTableCell
        key={name}
        sx={{
          textAlign: textAlign,
        }}
      >
        {_startCase(name)}
      </BaseTableCell>
    );
  });

  const bodyCells = insuranceAccList.map(
    ({
      id,
      name,
      insurance_accountable: { client_id, contact_name, contact_phone },
      provider_name,
      provider_phone,
      logged_in,
    }) => (
      <TableRow key={id}>
        <TableCell>{name}</TableCell>
        <TableCell>{client_id}</TableCell>
        <TableCell>{contact_name}</TableCell>
        <TableCell>{contact_phone}</TableCell>
        <TableCell>{provider_name}</TableCell>
        <TableCell>{provider_phone}</TableCell>
        <TableCell>{logged_in ? 'Yes' : 'No'}</TableCell>

        <TableCell sx={{ textAlign: 'right' }}>
          <BaseDetailsBtn />
          <BaseEditBtn />
        </TableCell>
      </TableRow>
    )
  );

  return (
    <MainContainer>
      <Box sx={{ display: 'flex', mb: '10px' }}>
        <Filter
          type={type}
          changeType={setType}
          companyId={companyId}
          changeCompanyId={handleChangeCompanyId}
        />
        <BaseCreateBtn reson={'digital_dispatch_insurance_account'} />
      </Box>
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

export default InsuranceAccounts;
