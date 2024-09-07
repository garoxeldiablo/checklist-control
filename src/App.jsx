import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {store, persistor} from "./store/store";
import { PersistGate } from "redux-persist/integration/react";


import Login from "./page/login";
import Manager from "./page/in-manager";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/manageraccount" element={<Manager />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}