import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: [] },
  reducers: {
    fetchTasks: (state, action) => {
      state.tasks = action.payload
    },
    createTask: (state, action) => {
      state.tasks = action.payload
    }
  }
})

// actions
export const { fetchTasks, createTask } = taskSlice.actions
export default taskSlice.reducer