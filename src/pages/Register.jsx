import React from 'react';

import { Form } from 'components/Form/Form';

import { useSignupUserMutation } from '../redux/contactsApi';

export const Register = () => {
  const [addNewUser] = useSignupUserMutation();

  const handleSubmit = data => {
    addNewUser(data)
      .unwrap()
      .then(res => {
        localStorage.setItem('token', res.token);
      });
  };

  return (
    <div>
      <Form formType={'register'} onSubmit={handleSubmit} />
    </div>
  );
};
