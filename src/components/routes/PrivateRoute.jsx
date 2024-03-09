import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useCurrentUserQuery } from '../../redux/contactsApi';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isSuccess } = useCurrentUserQuery();

  if (isSuccess) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" />;
};
