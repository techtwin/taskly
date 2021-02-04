import { createSlice } from '@reduxjs/toolkit'
const url = "http://localhost:3000/";

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

const { fetchLists, createList } = listSlice.actions

export const fetchAllLists = () => {
  return function (dispatch) {
    fetch(`${url}lists`)
    .then(r => r.json())
    .then(data => dispatch(fetchLists(data)))
  }
}

export const createNewList = (list) => {
  return function (dispatch) {
    fetch(`${url}lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(list)
    })
      .then(r => r.json())
      .then(data => {
        const action = createList(data)
        dispatch(action)
        console.log(data)
      })
  }
}

export default listSlice.reducer