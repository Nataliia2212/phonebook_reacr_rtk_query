import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { selectIsError, selectIsLoading } from '../redux/contactsSlice';
import { fetchDataThunk } from '../redux/operations';

export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <h2>Loading</h2>}
      {!error ? <ContactsList /> : <h1>Error</h1>}
    </div>
  );
}
