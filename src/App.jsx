import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {store, persistor} from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoute from "./hooks/privateroute";


import Login from "./page/login";
import Manager from "./page/manager/in-manager";
import TodoList from "./page/manager/to-do-list";
import Checklist from "./page/manager/check-to-do";
import Myprofile from "./page/profile";
import Instaff from "./page/staff/in-staff";
import CheckFromStaff from "./page/staff/checklist-to-do";
import Report from "./page/manager/report";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            {/* Proteksi Halaman Manager */}
            <Route
              path="/manager"
              element={
                <PrivateRoute requiredRole="Manager">
                  <Manager />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
                <PrivateRoute requiredRole="Manager">
                  <TodoList />
                </PrivateRoute>
              }
            />
            <Route
              path="/checklist"
              element={
                <PrivateRoute requiredRole="Manager">
                  <Checklist />
                </PrivateRoute>
              }
            />

            <Route
              path="/report"
              element={
                <PrivateRoute requiredRole="Manager">
                  <Report />
                </PrivateRoute>
              }
            />

            {/* Proteksi Halaman Staff */}
            <Route
              path="/staff"
              element={
                <PrivateRoute requiredRole="staff">
                  <Instaff />
                </PrivateRoute>
              }
            />
            <Route
              path="/staffcheck"
              element={
                <PrivateRoute requiredRole="staff">
                  <CheckFromStaff />
                </PrivateRoute>
              }
            />

            {/* Halaman Profile bisa diakses oleh semua peran */}
            <Route path="/profile" element={<Myprofile />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}