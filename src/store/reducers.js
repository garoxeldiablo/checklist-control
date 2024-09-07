// src/reducers.js
import { combineReducers } from 'redux';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
// Action Creators
export const login = (accessToken) => ({ type: LOGIN, payload: {accessToken} });
export const logout = () => ({ type: LOGOUT });

// Initial State
const initialState = {
  isAuthenticated: true,
  accessToken: null,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true, accessToken:action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, accessToken:null };
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
