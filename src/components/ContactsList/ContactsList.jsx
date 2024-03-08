import React from 'react';
import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';

import { useGetContactsQuery } from '../../redux/contactsApi';
import { selectFilter } from './../../redux/filterSlice';
import css from './ContactsList.module.css';

export default function ContactsList() {
  const { data = [], isLoading, isError } = useGetContactsQuery();
  const filter = useSelector(selectFilter);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  const getFilteredData = () => {
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterData = getFilteredData();
  return (
    <ul className={css.list}>
      {filterData?.map(user => (
        <ContactItem key={user.id} {...user} />
      ))}
    </ul>
  );
}
