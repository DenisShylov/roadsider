import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTypesData } from '../redux/slices/TypesSlice';

const useTypes = () => {
  const dispatch = useDispatch();
  const addType = useCallback(
    (state) => dispatch(addTypesData(state)),
    [dispatch]
  );

  return { addType };
};

export default useTypes;
