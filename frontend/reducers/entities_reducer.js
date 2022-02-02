import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import notebookReducer from "./notebook_reducer";
import notesReducer from "./notes_reducer";
import tagsReducer from "./tags_reducer";

export default combineReducers({
  users: usersReducer,
  notebooks: notebookReducer,
  notes: notesReducer,
  tags: tagsReducer
})