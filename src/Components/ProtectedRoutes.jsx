import { useContext } from 'react';
import { Navigate,Outlet } from 'react-router-dom'
import UsehandleLogin from './utils/UsehandleLogin';

const ProtectedRoutes = () => {
    const { isUserLoggedIn } = useContext(UsehandleLogin);
    console.log(isUserLoggedIn);
    // let isLoggedIn = false;
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes
