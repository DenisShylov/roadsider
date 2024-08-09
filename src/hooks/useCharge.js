import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addChargesData } from '../redux/slices/ChargeSlice';

const useCharge = () => {
  const dispatch = useDispatch();
  const addCharge = useCallback(
    (state) => dispatch(addChargesData(state)),
    [dispatch]
  );

  return { addCharge };
};

export default useCharge;
