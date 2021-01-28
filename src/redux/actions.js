import * as actions from "./actionTypes";
const url = "http://localhost:3000/";

// GET
export const fetchAllTasks = () => {
  return function (dispatch) {
    fetch(`${url}tasks`)
      .then((resp) => resp.json())
      .then((tasks) => {
        console.log("action; ALL TASKS:", tasks);
        dispatch({ type: actions.GET_ALL_TASKS, payload: tasks });
      });
  };
};
