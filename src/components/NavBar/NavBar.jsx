import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/userSlice';

const NavBar = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink to="/" className="link">
          Phonebook
        </NavLink>

        <NavLink to="/contacts" className="link">
          Contacts
        </NavLink>
        {!loggedIn && (
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
      {loggedIn && <UserMenu />}
    </>
  );
};

export default NavBar;
