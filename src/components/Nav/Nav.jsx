import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className="link">
            Phonebook
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className="link">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="link">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="link">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
