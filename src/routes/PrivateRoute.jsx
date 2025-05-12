// React
import React from 'react';

// Hooks
import useAuthMonitor from '../hooks/useAuthMonitor';

const PrivateRoute = ({ children }) => {
  useAuthMonitor();
  return (
    <>
        {children}
    </>
  )
};

export default PrivateRoute;
