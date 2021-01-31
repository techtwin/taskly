import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: [] },
  reducers: {
    fetchTasks: (state, action) => {
      state.tasks = action.payload
    }
  }
})

// actions
export const { fetchTasks } = taskSlice.actions
export default taskSlice.reducer