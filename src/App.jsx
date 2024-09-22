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

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/manager" element={<Manager />} /> */}
            <Route path="/staff" element={<Instaff />} />

            {/* Proteksi Halaman Manager */}
            <Route
              path="/manager"
              element={
                <PrivateRoute role="Manager">
                  <Manager />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
                <PrivateRoute role="Manager">
                  <TodoList />
                </PrivateRoute>
              }
            />
            <Route
              path="/checklist"
              element={
                <PrivateRoute role="Manager">
                  <Checklist />
                </PrivateRoute>
              }
            />

            <Route path="/create" element={<TodoList/>}/>
            <Route path="/checklist" element={<Checklist/>}/>
            <Route path="/staffcheck" element={<CheckFromStaff/>}/>
            <Route path="/profile" element={<Myprofile/>}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}