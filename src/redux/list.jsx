import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: "list",
  initialState: { lists: [] },
  reducers: {
    fetchLists: (state, action) => {
      state.lists = action.payload
    },
    createList: (state, action) => {
      state.lists = action.payload
    }
  }
})

export const { fetchLists, createList } = listSlice.actions
export default listSlice.reducer