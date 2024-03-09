import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  useLogoutUserMutation,
  useCurrentUserQuery,
} from '../../redux/contactsApi';
import { authUser, loadingToggle } from '../../redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const [logout] = useLogoutUserMutation();
  const { data, isLoading, isError, isSuccess } = useCurrentUserQuery();
  const navigate = useNavigate();

  if (isLoading) {
    dispatch(loadingToggle());
    return <h1>loading...</h1>;
  }

  if (!data) {
    return;
  }
  const handleLogout = () => {
    dispatch(authUser());

    if (isLoading) {
      dispatch(loadingToggle());
      return <h1>loading...</h1>;
    }

    if (isError) {
      dispatch(loadingToggle());
      return <h1>Error...</h1>;
    }

    if (isSuccess) {
      dispatch(loadingToggle());
    }

    logout()
      .unwrap()
      .then(res => {
        localStorage.removeItem('token');
        navigate('/login');
      });
  };

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
