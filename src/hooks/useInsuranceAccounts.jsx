import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addInsuranceAccountsData } from '../redux/slices/InsuranceAccountsSlice';

const useInsuranceAccounts = () => {
  const dispatch = useDispatch();
  const insuranceAccountsList = useCallback(
    (list) => dispatch(addInsuranceAccountsData(list)),
    [dispatch]
  );

  return { insuranceAccountsList };
};

export default useInsuranceAccounts;
