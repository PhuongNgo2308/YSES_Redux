import {
  LOGIN_REQUEST,
  CLEAR_USER_EMAIL_PWD
} from "../constants/const.actionTypes";

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
        },
        currentUserData: {
          email: email,
          password: password,
          uid: 1,
          displayName: "user one"
        }
      };

    case CLEAR_USER_EMAIL_PWD:
      return {
        ...state,
        enteredUserData: INITIAL_STATE,
        currentUserData: {
          ...INITIAL_STATE,
          uid: null,
          displayName: null
        }
      };

    default:
      return state;
  }
};

export default login;
