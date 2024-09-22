// // src/reducers.js
// import { combineReducers } from 'redux';

// // Actions
// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';

// // Action Creators
// export const login = (accessToken) => ({ type: LOGIN, payload: {accessToken} });
// export const logout = () => ({ type: LOGOUT });

// // Initial State
// const initialState = {
//   isAuthenticated: true,
//   accessToken: null,
// };

// // Auth Reducer
// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return { ...state, isAuthenticated: true, accessToken:action.payload };
//     case LOGOUT:
//       return { ...state, isAuthenticated: false, accessToken:null };
//     default:
//       return state;
//   }
// };

// // Root Reducer
// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// export default rootReducer;

// authSlice.js (Redux slice)

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    role: null, // Role default null
    user: null,
    token: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.roles; // Simpan role setelah login
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

