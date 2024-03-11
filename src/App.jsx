import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { Phonebook } from './pages/Phonebook/Phonebook';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contacts } from './pages/Contacts';
import { PrivateRoute } from './components/routes/PrivateRoute';
import { PublicRoute } from './components/routes/PublicRoute';
import { useSelector } from 'react-redux';
import { selectIsRefresh, selectToken } from './redux/userSlice';
import { useCurrentUserQuery } from './redux/contactsApi';

export default function App() {
  const token = useSelector(selectToken);
  const skip = !token;
  const isRefresh = useSelector(selectIsRefresh);

  useCurrentUserQuery('', { skip });

  return isRefresh ? (
    <h1>loading</h1>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
