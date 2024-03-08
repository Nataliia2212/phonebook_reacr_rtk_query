import React from 'react';

import { Form } from 'components/Form/Form';

import { useLoginUserMutation } from '../redux/contactsApi';

export const Login = () => {
  const [loginUser, { isSuccess }] = useLoginUserMutation();

  const handleSubmit = data => {
    loginUser(data)
      .unwrap()
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
      });
  };
  console.log(isSuccess);
  return (
    <div>
      <Form formType={'login'} onSubmit={handleSubmit} />
    </div>
  );
};
