import { TableCell, TableRow } from '@mui/material';
import _startCase from 'lodash/startCase';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//Local Files
import BaseDetailsBtn from '../../components/common/baseDetailsBtn/BaseDetailsBtn';
import BaseEditBtn from '../../components/common/baseEditBtn/BaseEditBtn';
import BaseTable from '../../components/common/baseTable/BaseTable';
import { BaseTableCell } from '../../components/common/baseTable/BaseTable.styled';
import { MainContainer } from '../../components/ui/CommonStyles';
import useConstants from '../../constants/Constants';
import { parseDispatchText } from '../../helpers';
import useDispatches from '../../hooks/useDispatches';
import {
  useGetDispatchesQuery,
  useLazyGetDispatchesQuery,
} from '../../redux/API/DispatchesAPI';
import Filter from './Filter/Filter';

const Dispatches = () => {
  const { access_token, SELECT_TYPE, dispatchesHeaderName } = useConstants();
  const [type, setType] = useState(SELECT_TYPE);
  const [query, setQuery] = useState({ value: '', error: '' });
  const [validationError, setValidationError] = useState(false);
  const [firstTimeOpen, setFirstTimeOpen] = useState(false);
  const { dispatchesList } = useDispatches();

  const { data, isLoading } = useGetDispatchesQuery({
    access_token,
    dispatch_type: type[0].value,
    ...(!!query && !firstTimeOpen && { query: query.value }),
    with_validation_errors: validationError,
  });

  const [requestQuery] = useLazyGetDispatchesQuery();
  const dispatchesData = useSelector((state) => state.dispatchesData.dispatch);
  const { dispatches, pagination } = dispatchesData;

  useEffect(() => {
    let timeout;

    if (firstTimeOpen) {
      timeout = setTimeout(
        () => {
          requestQuery({
            access_token,
            query: query.value,
            dispatch_type: type[0].value,
            with_validation_errors: validationError,
          });
          setFirstTimeOpen(false);
        },
        !!query ? 500 : 0
      );

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstTimeOpen, query]);

  useEffect(() => {
    if (data) {
      dispatchesList(data);
    }
  }, [data, dispatchesList]);

  const headerCells = dispatchesHeaderName.map(({ id, value, align }) => {
    return (
      <BaseTableCell
        key={id}
        sx={{
          textAlign: align,
        }}
      >
        {_startCase(value)}
      </BaseTableCell>
    );
  });

  const bodyCells = dispatches.map(({ id, text }) => {
    return (
      <TableRow key={id}>
        <TableCell sx={{ textAlign: 'left' }}>
          {parseDispatchText(text).filter((_, index) => index < 3)}
        </TableCell>

        <TableCell sx={{ textAlign: 'right' }}>
          <BaseDetailsBtn />
          <BaseEditBtn />
        </TableCell>
      </TableRow>
    );
  });
  return (
    <MainContainer>
      <Filter
        query={query.value}
        changeQuery={setQuery}
        type={type}
        changeType={setType}
        validationError={validationError}
        changeValidationError={setValidationError}
        changeFirstTimeOpen={setFirstTimeOpen}
      />

      <BaseTable
        headerCells={headerCells}
        bodyCells={bodyCells}
        loading={isLoading}
        offset={0}
        total_count={pagination.total_count}
      />
    </MainContainer>
  );
};

export default Dispatches;
