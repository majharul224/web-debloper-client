import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Privat = ({children}) => {
    const { user, loding } = useContext(AuthContext);
  const location = useLocation();

  if (loding) {
    return (
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    );
  }

  if (!user) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // authorized so return child components
  return children;
};

export default Privat;