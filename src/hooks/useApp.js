import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { openDrawer } from '../redux/slices/AppSlice';

const useApp = () => {
  const dispatch = useDispatch();
  const openAppDrawer = useCallback(
    (state) => dispatch(openDrawer(state)),
    [dispatch]
  );

  return { openAppDrawer };
};

export default useApp;
