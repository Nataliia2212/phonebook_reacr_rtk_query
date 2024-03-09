import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';

import { useGetContactsQuery } from '../../redux/contactsApi';
import { selectFilter } from './../../redux/filterSlice';
import css from './ContactsList.module.css';
import { loadingToggle } from '../../redux/auth';

export default function ContactsList() {
  const { data = [], isLoading, isError, isSuccess } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  if (isLoading) {
    dispatch(loadingToggle());
    return <h1>loading...</h1>;
  }

  if (isError) {
    dispatch(loadingToggle());
    return <h1>Error...</h1>;
  }

  if (isSuccess) {
    dispatch(loadingToggle());
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
