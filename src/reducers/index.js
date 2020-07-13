import { combineReducers } from "redux";
import adminReducer from "./adminreducer";
import clientReducer from "./clientreducer";

const allReducers = combineReducers({
  menu: adminReducer,
  meal: clientReducer,
});

export default allReducers;
