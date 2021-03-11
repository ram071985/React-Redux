import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import BugsList from "./components/BugsList";
import Items from "./components/addItems";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
      <Items />
    </Provider>
  );
}

export default App;
