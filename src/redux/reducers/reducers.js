//step-3
import { combineReducers } from "redux";
import blogs from "./blogReducer";

const rootReducer = combineReducers({
  blogs,
}); // it will combine all reducers...

export default rootReducer;
