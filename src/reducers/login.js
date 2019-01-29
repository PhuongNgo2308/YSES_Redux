import { LOGIN_REQUEST, CLEAR_USER_EMAIL_PWD } from "../constants/ActionTypes";

const INITIAL_STATE = {
  email: "",
  password: ""
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      const { email, password } = action.credential;

      return {
        ...state,
        enteredUserData: {
          email: email,
          password: password
        }
      };

    case CLEAR_USER_EMAIL_PWD:
      return {
        ...state,
        enteredUserData: INITIAL_STATE
      };

    default:
      return state;
  }
};

export default login;
