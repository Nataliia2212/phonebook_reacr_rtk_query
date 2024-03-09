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
    loadingFalse(state) {
      state.isLoading = false;
    },
    loadingTrue(state) {
      state.isLoading = true;
    },
  },
  selectors: {
    selectAuth: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
  },
});

export const authReducer = authSlice.reducer;
export const authUser = authSlice.actions.loggedIn;
export const loadingFalse = authSlice.actions.loadingFalse;
export const loadingTrue = authSlice.actions.loadingTrue;
export const { selectAuth, selectIsLoading } = authSlice.selectors;
