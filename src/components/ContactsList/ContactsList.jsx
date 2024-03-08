import React from 'react';
// import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contactsApi';

import ContactItem from 'components/ContactItem/ContactItem';

// import { selectContactsList } from '../../redux/contactsSlice';
// import { selectFilter } from '../../redux/filterSlice';
import css from './ContactsList.module.css';

export default function ContactsList() {
  const { data, isLoading, isError } = useGetContactsQuery();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  // const contactsList = useSelector(selectContactsList);
  // const filter = useSelector(selectFilter);

  // const getFilteredData = () => {
  //   return data?.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const filterData = getFilteredData(data);
  return (
    <ul className={css.list}>
      {data?.map(user => (
        <ContactItem key={user.id} {...user} />
      ))}
    </ul>
  );
}
