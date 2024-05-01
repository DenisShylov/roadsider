import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addAdminsList } from '../redux/slices/AdminsSlice';

const useAdmins = () => {
  const dispatch = useDispatch();
  const adminsList = useCallback(
    (list) => dispatch(addAdminsList(list)),
    [dispatch]
  );

  return { adminsList };
};

export default useAdmins;
