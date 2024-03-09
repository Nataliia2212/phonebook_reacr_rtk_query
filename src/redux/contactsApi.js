import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  tagTypes: ['contacts', 'users'],
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    signupUser: builder.mutation({
      query: body => ({
        url: 'users/signup',
        method: 'POST',
        body,
      }),
      // providesTags: ['users'],
    }),

    loginUser: builder.mutation({
      query: body => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
      // providesTags: ['users'],
      invalidatesTags: ['contacts', 'users'],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      // providesTags: ['users'],
      invalidatesTags: ['users', 'contacts'],
    }),

    currentUser: builder.query({
      query: () => 'users/current',
      providesTags: ['users'],
    }),

    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['contacts'],
    }),

    addNewContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useAddNewContactMutation,
  useDeleteContactMutation,
  useCurrentUserQuery,
} = contactsApi;
