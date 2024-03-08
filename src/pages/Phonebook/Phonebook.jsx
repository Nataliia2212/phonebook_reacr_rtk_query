import React from 'react';

import { UserMenu } from 'components/UserMenu/UserMenu';

import s from './Phonebook.module.css';

export const Phonebook = () => {
  return (
    <div>
      {' '}
      <h1>Phonebook</h1>
      <div className={s.wraper}>
        <UserMenu />
      </div>
    </div>
  );
};
