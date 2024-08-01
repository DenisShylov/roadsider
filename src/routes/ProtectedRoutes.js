import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isAuth = useSelector(
    (state) => state.activeSession?.session?.access_token
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign_in');
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};

export default ProtectedRoutes;
