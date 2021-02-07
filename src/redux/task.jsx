import { createSlice } from '@reduxjs/toolkit'
const url = "http://localhost:3000/";

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: [] },
  reducers: {
    fetchTasks: (state, action) => {
      state.tasks = action.payload
    },
    createTask: (state, action) => {
      state.tasks = [ action.payload, ...state.tasks]
    },
    deleteTask: (state, action) => {
      const newArr = [...state.tasks]
      state.tasks = newArr.filter((task) => task.id !== action.payload)
    }
  }
})

// actions
const { fetchTasks, createTask, deleteTask } = taskSlice.actions

export const fetchAllTasks = () => {
  return function (dispatch) {
    fetch(`${url}tasks`)
    .then(r => r.json())
    .then(data => dispatch(fetchTasks(data)))
  }
}

export const createNewTask = (task) => {
  return function (dispatch) {
    fetch(`${url}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(r => r.json())
      .then(data => {
        const action = createTask(data)
        dispatch(action)
        console.log(data)
      })
  }
}

export const deleteCurrentTask = (taskId) => {
  return function (dispatch) {
    fetch(`${url}tasks/${taskId}`, {
      method: "DELETE"
    })
    dispatch(deleteTask(taskId))
  }
}

// reducer
export default taskSlice.reducer