import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = { ...state.user, ...payload.user };
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    resetUser(state) {
      return initialState;
    },
    isLoading(state, { payload }) {
      console.log(state);
      console.log(payload);
      state.isLoading = true;
    },
  },
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
    selectToken: state => state.token,
  },
});

export const userReducer = userSlice.reducer;
export const authUser = userSlice.actions.loggedIn;
export const { setUser, loggedIn, resetUser, isLoading } = userSlice.actions;
export const { selectIsLoggedIn, selectIsLoading, selectToken } =
  userSlice.selectors;
