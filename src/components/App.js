import React from "react";
import Login from "./Login";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const MyTypo = styled(Typography)({
  background: "#689f38",
  border: 0,
  borderRadius: 3,
  boxShadow:
    "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
  color: "white",
  height: "auto",
  paddingTop: 10,
  paddingBottom: 10,
  textAlign: "center"
});

const App = () => {
  return (
    <div className="yses-app">
      <MyTypo component="h1" variant="h4">
        YSES - Your Secrets Encryption Service
      </MyTypo>

      <Login />
    </div>
  );
};

export default App;
