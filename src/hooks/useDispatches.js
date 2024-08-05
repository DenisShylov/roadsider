import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addDispatchesData } from '../redux/slices/DispatchesSlice';

const useDispatches = () => {
  const dispatch = useDispatch();
  const dispatchesList = useCallback(
    (list) => dispatch(addDispatchesData(list)),
    [dispatch]
  );

  return { dispatchesList };
};

export default useDispatches;
