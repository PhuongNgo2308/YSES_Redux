import * as ACTION_TYPE from "../constants/ActionTypes";

export const doLogin = (email, password) => ({
  type: ACTION_TYPE.LOGIN_REQUEST,
  payload: {
    email,
    password
  }
});
