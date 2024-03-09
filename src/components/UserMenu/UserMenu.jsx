import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useLogoutUserMutation,
  useCurrentUserQuery,
} from '../../redux/contactsApi';

export const UserMenu = () => {
  const [logout] = useLogoutUserMutation();
  const { data, isLoading, isError } = useCurrentUserQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  console.log(data);
  const handleLogout = () => {
    logout()
      .unwrap()
      .then(res => {
        console.log(res);
        localStorage.removeItem('token');
        navigate('/login');
      });
    navigate('/login');
  };

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
