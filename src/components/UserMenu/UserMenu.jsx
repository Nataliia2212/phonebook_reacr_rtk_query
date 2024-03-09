import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useLogoutUserMutation,
  useCurrentUserQuery,
} from '../../redux/contactsApi';
import { authUser } from '../../redux/auth';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const [logout] = useLogoutUserMutation();
  const { data, isLoading, isError } = useCurrentUserQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>loading...</h1>;
  }

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

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
