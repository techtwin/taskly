import { combineReducers } from "redux";
import * as actions from "./actionTypes";

const defaultState = {
  tasks: [],
};

function tasksReducer(state = defaultState.tasks, action) {
  switch (action.type) {
    case actions.GET_ALL_TASKS:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
