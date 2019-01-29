import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

//import store from "store";
import App from "./components/App";
import store from "./store";

const WiredApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElm = document.getElementById("root");

render(<WiredApp />, rootElm);
