import React from 'react';
import {
  useLogoutUserMutation,
  useCurrentUserQuery,
} from '../../redux/contactsApi';

export const UserMenu = () => {
  const [logout] = useLogoutUserMutation();
  const { data } = useCurrentUserQuery();
  if (!data) {
    return;
  }

  return (
    <div>
      <img
        src="https://www.svgrepo.com/show/44434/brunette-female-woman-long-hair.svg"
        alt="avatar"
        width={250}
      />
      <p>{data.name}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
