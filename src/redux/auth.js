import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
  selectors: {
    selectAuth: state => state.isLoggedIn,
  },
});

export const authReducer = authSlice.reducer;
export const authUser = authSlice.actions.loggedIn;
export const { selectAuth } = authSlice.selectors;
