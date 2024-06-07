import React, { useEffect, useState } from 'react';
import BaseTable from '../../components/common/baseTable/BaseTable';
import BaseCreateBtn from '../../components/common/baseCreateBtn/BaseCreateBtn';
import { MainContainer } from '../../components/ui/CommonStyles';
import { useGetInsuranseAccQuery } from '../../redux/API/InsuranceAccAPI';
import useConstants from '../../constants/Constants';
import { Box, TableCell, TableRow } from '@mui/material';
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import _startCase from 'lodash/startCase';
import useInsuranceAccounts from '../../hooks/useInsuranceAccounts';
import { useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import { BaseTableCell } from '../../components/common/baseTable/BaseTable.styled';

const InsuranceAccounts = () => {
  const { SELECT_TYPE } = useConstants();
  const [type, setType] = useState(SELECT_TYPE);

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
    limit: 25,
    offset: 0,
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
          changeCompanyId={setCompanyId}
        />
        <BaseCreateBtn />
      </Box>
      <BaseTable
        loading={isLoading}
        headerCells={headerCells}
        bodyCells={bodyCells}
      />
    </MainContainer>
  );
};

export default InsuranceAccounts;
