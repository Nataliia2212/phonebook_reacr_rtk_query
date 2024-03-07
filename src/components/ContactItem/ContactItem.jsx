import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteContactThunk } from '../../redux/operations';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
}
