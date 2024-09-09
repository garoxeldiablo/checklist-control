import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {store, persistor} from "./store/store";
import { PersistGate } from "redux-persist/integration/react";


import Login from "./page/login";
import Manager from "./page/manager/in-manager";
import TodoList from "./page/manager/to-do-list";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/manager/createtodolist" element={<TodoList/>}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}