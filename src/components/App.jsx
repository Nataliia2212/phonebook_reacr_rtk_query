import React from 'react';

import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
