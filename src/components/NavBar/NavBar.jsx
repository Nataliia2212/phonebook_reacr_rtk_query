import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserMenu } from '../UserMenu/UserMenu';
import { useCurrentUserQuery } from '../../redux/contactsApi';

const NavBar = () => {
  const { isSuccess } = useCurrentUserQuery();

  return (
    <>
      <nav>
        <NavLink to="/" className="link">
          Phonebook
        </NavLink>

        <NavLink to="/contacts" className="link">
          Contacts
        </NavLink>
        {!isSuccess && (
          <>
            <NavLink to="/register" className="link">
              Register
            </NavLink>

            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </>
        )}
      </nav>
      {isSuccess && <UserMenu />}
    </>
  );
};

export default NavBar;
