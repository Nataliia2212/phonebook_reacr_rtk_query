import { configureStore } from '@reduxjs/toolkit';

import { contactsApi } from './contactsApi';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});
