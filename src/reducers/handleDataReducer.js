import * as ACTIONS from "../constants/ActionTypes";

// export const FETCH_ENCDATA_REQUEST_BEGIN = "FETCH_ENCDATA_REQUEST_BEGIN";
// export const FETCH_ENCDATA_REQUEST_SUCCESS = "FETCH_ENCDATA_REQUEST_SUCCESS";
// export const FETCH_ENCDATA_REQUEST_FAILURE = "FETCH_ENCDATA_REQUEST_FAILURE";

const INITIAL_STATE = {
  encData: "",
  decData: ""
};

const handleDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ENCDATA_REQUEST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
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

export default handleDataReducer;
