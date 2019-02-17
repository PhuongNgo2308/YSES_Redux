import * as ACTION_TYPE from "../constants/ActionTypes";

export const beginLogin = (email, password, isShowPassword) => ({
  type: ACTION_TYPE.LOGIN_REQUEST_BEGIN,
  payload: {
    email,
    password,
    isShowPassword
  }
});

export const clearAll = () => ({
  type: ACTION_TYPE.CLEAR_USER_EMAIL_PWD,
  payload: {
    email: "",
    password: ""
  }
});
