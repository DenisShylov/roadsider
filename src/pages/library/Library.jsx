import { Tab, TableCell, TableRow, Tabs } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import BaseCreateBtn from '../../components/common/baseCreateBtn/BaseCreateBtn';
import {
  FiltersContainer,
  MainContainer,
} from '../../components/ui/CommonStyles';
import {
  useGetServicesBasicQuery,
  useLazyGetChargesQuery,
  useLazyGetTypesQuery,
} from '../../redux/API/LibraryAPI';
import useConstant from '../../constants/Constants';
import BaseTable from '../../components/common/baseTable/BaseTable';
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import { BaseTableCell } from '../../components/common/baseTable/BaseTable.styled';
import _startCase from 'lodash/startCase';
import useService from '../../hooks/useService';
import { useSelector } from 'react-redux';
import useCharge from '../../hooks/useCharge';
import useTypes from '../../hooks/useTypes';

const Library = () => {
  const { access_token, libraryHeaderName, libraryChargesHeaderName } =
    useConstant();
  const { addService } = useService();
  const { addCharge } = useCharge();
  const [value, setValue] = useState('services');
  const [serviceType, setServiceType] = useState('basic');
  const [chargeType, setChargeType] = useState('basic');
  const [isCharges, setIsCharges] = useState(false);
  //Services
  const serviceList = useSelector((state) => state.serviceData.all);
  const { services, pagination: servicePagination } = serviceList;
  const { data: servicesData, isFetching } = useGetServicesBasicQuery({
    access_token,
    service_type: serviceType,
  });
  // Charges
  const [getCharge, { data: chargesData }] = useLazyGetChargesQuery();
  const chargesList = useSelector((state) => state.chargeData?.all);
  const { charges, pagination: chargePagination } = chargesList;
  //Fees
  const [isFees, setIsFees] = useState(false);
  // Types
  const [isTypes, setIsTypes] = useState(false);
  const [getType, { data: typesData }] = useLazyGetTypesQuery();
  const { addType } = useTypes();
  const typesList = useSelector((state) => state.typeData?.all);
  const { types, pagination: typesPagination } = typesList;

  useEffect(() => {
    if (value !== 'charges') {
      setIsCharges(false);
      setIsTypes(false);
    }
    if (value === 'services') {
      setServiceType('basic');
      setIsCharges(false);
      setIsTypes(false);
    } else if (value === 'additional') {
      setServiceType('additional');
      setIsCharges(false);
      setIsTypes(false);
    } else if (value === 'charges') {
      setChargeType('basic');
      setIsCharges(true);
      setIsTypes(false);
      getCharge({ access_token, charge_type: 'basic' });
    } else if (value === 'fees') {
      setIsFees(true);
      setIsTypes(false);
      setChargeType('fee');
      addCharge({ charges: [], pagination: [] });
      getCharge({ access_token, charge_type: 'fee' });
    } else if (value === 'types') {
      setIsTypes(true);
      setIsCharges(false);

      getType({ access_token });
    }

    if (servicesData) {
      addService(servicesData);
    }
    if (chargesData) {
      addCharge(chargesData);
    }
    if (typesData) {
      addType(typesData);
    }
  }, [
    value,
    servicesData,
    addService,
    addCharge,
    chargesData,
    addType,
    typesData,
    access_token,
    getCharge,
    getType,
  ]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const headerCells = isCharges
    ? libraryChargesHeaderName.map(({ id, value, align }) => (
        <BaseTableCell
          key={id}
          sx={{
            textAlign: align,
          }}
        >
          {_startCase(value)}
        </BaseTableCell>
      ))
    : libraryHeaderName.map(({ id, value, align }) => (
        <BaseTableCell
          key={id}
          sx={{
            textAlign: align,
          }}
        >
          {_startCase(value)}
        </BaseTableCell>
      ));

  const bodyCells = () => {
    if (isCharges && isFees) {
      return charges.map(({ id, name, basic_rate_types, mile_type }) => (
        <TableRow key={id}>
          <TableCell>{name}</TableCell>
          <TableCell>{basic_rate_types}</TableCell>
          <TableCell>{mile_type}</TableCell>
          <TableCell sx={{ textAlign: 'right' }}>
            <BaseDetailsBtn />
            <BaseEditBtn />
          </TableCell>
        </TableRow>
      ));
    } else if (isTypes) {
      return types.map(({ id, name }) => (
        <TableRow key={id}>
          <TableCell>{name}</TableCell>
          <TableCell sx={{ textAlign: 'right' }}>
            <BaseDetailsBtn />
            <BaseEditBtn />
          </TableCell>
        </TableRow>
      ));
    } else {
      return services.map(({ id, name }) => (
        <TableRow key={id}>
          <TableCell>{name}</TableCell>
          <TableCell sx={{ textAlign: 'right' }}>
            <BaseDetailsBtn />
            <BaseEditBtn />
          </TableCell>
        </TableRow>
      ));
    }
  };

  return (
    <MainContainer>
      <FiltersContainer sx={{ pb: '10px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs"
        >
          <Tab value="services" label="services" />
          <Tab value="additional" label="additional" />
          <Tab value="charges" label="charges" />
          <Tab value="fees" label="fees" />
          <Tab value="types" label="types" />
        </Tabs>
        <BaseCreateBtn />
      </FiltersContainer>
      <BaseTable
        headerCells={headerCells}
        bodyCells={bodyCells()}
        loading={isFetching}
        total_count={
          isCharges
            ? chargePagination?.total_count
            : isTypes
            ? typesPagination.total_count
            : servicePagination?.total_count
        }
      />
    </MainContainer>
  );
};

export default Library;
