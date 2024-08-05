import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { profileData } from '../redux/slices/ProfileSlice';

const useProfile = () => {
  const dispatch = useDispatch();
  const addAdminData = useCallback(
    (state) => dispatch(profileData(state)),
    [dispatch]
  );

  return { addAdminData };
};

export default useProfile;
