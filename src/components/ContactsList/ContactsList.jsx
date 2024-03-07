import React from 'react';
import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';

import { selectContactsList } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';
import css from './ContactsList.module.css';

export default function ContactsList() {
  const contactsList = useSelector(selectContactsList);
  const filter = useSelector(selectFilter);

  const getFilteredData = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterData = getFilteredData(contactsList);
  return (
    <ul className={css.list}>
      {filterData.map(user => (
        <ContactItem key={user.id} {...user} />
      ))}
    </ul>
  );
}
