import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '../components/Form/Form';

import { useLoginUserMutation } from '../redux/contactsApi';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = data => {
    loginUser(data)
      .unwrap()
      .then(res => {
        localStorage.setItem('token', res.token);
        navigate('/contacts');
      });
  };

  return (
    <div>
      <Form formType={'login'} onSubmit={handleSubmit} />
    </div>
  );
};
