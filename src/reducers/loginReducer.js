import * as ACTIONS from "../constants/ActionTypes";
import DEFAULT_STATE from "../constants/DefaultStateTree";

const loginReducer = (state = DEFAULT_STATE.uiLoginForm, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST_BEGIN:
      const { email, password, isShowPassword } = action.payload;

      return {
        ...state,
        loading: true,
        error: null,
        uiLoginForm: {
          email: email,
          password: password,
          isShowPassword: isShowPassword
        }
      };

    // case ACTIONS.LOGIN_REQUEST_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null
    //   };

    // case ACTIONS.LOGIN_REQUEST_FAILURE:
    //   const { error } = action.payload;

    //   return {
    //     ...state,
    //     loading: false,
    //     error: error
    //   };

    // case ACTIONS.CLEAR_USER_EMAIL_PWD:
    //   return {
    //     ...state,
    //     ui: {
    //       ...state.ui,
    //       uiLoginForm: INITIAL_STATE
    //     }
    //   };

    default:
      return state;
  }
};

export default loginReducer;
