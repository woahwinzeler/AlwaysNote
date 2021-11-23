import { combineReducers } from "redux";
import entities_reducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionsReducer from "./session_reducer";

export default combineReducers({
  entities: entities_reducer, 
  sessions: sessionsReducer, 
  errors: errorsReducer
});

