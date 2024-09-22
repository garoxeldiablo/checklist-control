// // src/PrivateRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return isAuthenticated ? children : <Navigate to="/" />;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, requiredRole }) => {
  const role = localStorage.getItem('role'); // Ambil role dari localStorage

  if (!role) {
    // Jika role tidak ditemukan, redirect ke halaman login
    return <Navigate to="/" />;
  }

  if (requiredRole && role !== requiredRole) {
    // Jika role tidak sesuai dengan yang dibutuhkan, redirect ke halaman login
    return <Navigate to="/" />;
  }

  // Jika role sesuai, tampilkan halaman yang diminta
  return children;
};

export default PrivateRoute;





