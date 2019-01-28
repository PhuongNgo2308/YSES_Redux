import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

//import store from "store";
import App from "./app";
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// import { createStore } from "redux";
// import rootReducer from "reducers/rdc.index";

// const store = createStore(rootReducer);

// export default store;
