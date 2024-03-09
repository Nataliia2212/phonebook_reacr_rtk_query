import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const loggedIn = useSelector(selectAuth);

  if (loggedIn) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" />;
};
