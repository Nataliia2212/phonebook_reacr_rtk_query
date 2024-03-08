import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addNewContactThunk,
  deleteContactThunk,
  fetchDataThunk,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
        state.contactsList = payload;
        state.loading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contactsList = state.contactsList.filter(
          contact => contact.id !== payload
        );
        state.loading = false;
      })
      .addCase(addNewContactThunk.fulfilled, (state, { payload }) => {
        state.contactsList.push(payload);
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchDataThunk.pending,
          deleteContactThunk.pending,
          addNewContactThunk.pending
        ),
        (state, { payload }) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchDataThunk.rejected,
          deleteContactThunk.rejected,
          addNewContactThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
        }
      );
  },
  selectors: {
    selectContactsList: state => state.contactsList,
    selectIsLoading: state => state.loading,
    selectIsError: state => state.error,
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addNewContact, deleteContact, isError, fetchIsDone, isLoading } =
  contactsSlice.actions;
export const { selectContactsList, selectIsError, selectIsLoading } =
  contactsSlice.selectors;
