import { Form } from 'components/Form/Form';
import React from 'react';

import { useSignupUserMutation } from '../redux/contactsApi';

export const Register = () => {
  const [addNewUser] = useSignupUserMutation();
  const handleSubmit = data => {
    addNewUser(data);
  };
  return (
    <div>
      <Form formType={'register'} onSubmit={handleSubmit} />;
    </div>
  );
};
