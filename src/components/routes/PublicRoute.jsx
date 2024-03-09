import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const loggedIn = useSelector(selectAuth);

  if (loggedIn) {
    return <Navigate to={location.state?.from || '/'} replace={true} />;
  }
  return children;
};
