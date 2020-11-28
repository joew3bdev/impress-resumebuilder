import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import commonReducer from "./commonReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    commonReducer
  });

export default rootReducer;
