import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  useLogoutUserMutation,
  useCurrentUserQuery,
} from '../../redux/contactsApi';
import { authUser, loadingFalse, loadingTrue } from '../../redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const [logout] = useLogoutUserMutation();
  const { data, isLoading, isError, isSuccess } = useCurrentUserQuery();
  const navigate = useNavigate();

  if (!data) {
    return;
  }
  const handleLogout = () => {
    dispatch(authUser());

    logout()
      .unwrap()
      .then(res => {
        localStorage.removeItem('token');
        navigate('/login');
      });
  };

  if (isLoading) {
    dispatch(loadingTrue());
    return <h1>loading...</h1>;
  }

  if (isError) {
    dispatch(loadingFalse());
    return <h1>Error...</h1>;
  }

  if (isSuccess) {
    dispatch(loadingFalse());
  }

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
