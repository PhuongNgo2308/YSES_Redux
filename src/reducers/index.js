import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import handleDataReducer from "../reducers/handleDataReducer";

export default combineReducers({
  uiLoginForm: loginReducer,
  uiHandleDataForm: handleDataReducer
});
