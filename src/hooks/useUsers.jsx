import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { usersList as getUsersList } from '../redux/slices/UsersSlice';

const useUsers = () => {
  const dispatch = useDispatch();
  const getUsers = useCallback(
    (responseUsers) => dispatch(getUsersList(responseUsers)),
    [dispatch]
  );

  return { getUsers };
};

export default useUsers;
