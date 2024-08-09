import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addServiceData } from '../redux/slices/ServiceSlice';

const useService = () => {
  const dispatch = useDispatch();
  const addService = useCallback(
    (state) => dispatch(addServiceData(state)),
    [dispatch]
  );

  return { addService };
};

export default useService;
