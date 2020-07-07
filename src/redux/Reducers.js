import { combineReducers } from "redux";
import settings from "./settings/Reducer";
import user from './user'
const reducers = combineReducers({
  settings,
  user
});

export default reducers;
