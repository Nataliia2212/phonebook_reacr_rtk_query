import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useLogoutUserMutation,
  useCurrentUserQuery,
} from '../../redux/contactsApi';

export const UserMenu = () => {
  const [logout] = useLogoutUserMutation();

  const { data } = useCurrentUserQuery();
  const navigate = useNavigate();

  if (!data) {
    return;
  }
  const handleLogout = () => {
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
