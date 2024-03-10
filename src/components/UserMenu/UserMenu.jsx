import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useLogoutUserMutation,
  useCurrentUserQuery,
} from '../../redux/contactsApi';
import s from './UserMenu.module.css';

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
    <div className={s.wraper}>
      <div>
        <p className={s.text}>{data?.name}</p>
        <p className={s.text}>{data?.email}</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
