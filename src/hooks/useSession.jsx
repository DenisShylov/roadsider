import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createSession as createSessionAction } from '../redux/slices/SessionSlice';

const useSession = () => {
  const dispatch = useDispatch();
  const createSession = useCallback(
    (responseSession) => dispatch(createSessionAction(responseSession)),
    [dispatch]
  );

  return { createSession };
};

export default useSession;
