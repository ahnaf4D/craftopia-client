import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className='flex min-h-screen my-12'>
        <GridLoader
          color='#000000'
          className='text-center mx-auto'
        ></GridLoader>
      </div>
    );
  if (user) return children;
  return <Navigate to='/login' state={location.pathname}></Navigate>;
};

export default PrivateRoutes;
