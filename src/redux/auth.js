import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    loadingToggle(state) {
      state.isLoading = !state.isLoading;
    },
  },
  selectors: {
    selectAuth: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
  },
});

export const authReducer = authSlice.reducer;
export const authUser = authSlice.actions.loggedIn;
export const loadingToggle = authSlice.actions.loadingToggle;
export const { selectAuth, selectIsLoading } = authSlice.selectors;
