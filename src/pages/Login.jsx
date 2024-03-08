import { Form } from 'components/Form/Form';
import React from 'react';

import { useLoginUserMutation } from '../redux/contactsApi';

export const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const handleSubmit = data => {
    loginUser(data);
  };
  return (
    <div>
      <Form formType={'login'} onSubmit={handleSubmit} />
    </div>
  );
};
