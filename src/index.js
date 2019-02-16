import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { MuiThemeProvider } from "@material-ui/core/styles";

//import store from "store";
import App from "./components/App";
import store from "./store";
import theme from "./style/theme";

const WiredApp = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

const rootElm = document.getElementById("root");

render(<WiredApp />, rootElm);
