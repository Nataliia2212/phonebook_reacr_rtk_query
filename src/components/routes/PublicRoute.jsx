import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useCurrentUserQuery } from '../../redux/contactsApi';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const { isSuccess } = useCurrentUserQuery();

  if (isSuccess) {
    return <Navigate to={location.state?.from || '/'} replace={true} />;
  }
  return children;
};
