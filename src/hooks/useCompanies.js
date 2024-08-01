import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addCompaniesData } from '../redux/slices/CompaniesSlice';

const useCompanies = () => {
  const dispatch = useDispatch();
  const companiesList = useCallback(
    (list) => dispatch(addCompaniesData(list)),
    [dispatch]
  );

  return { companiesList };
};

export default useCompanies;
