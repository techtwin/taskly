import { createSlice } from '@reduxjs/toolkit'
const url = "http://localhost:3000/";

const listSlice = createSlice({
  name: "list",
  initialState: { lists: [] },
  reducers: {
    fetchLists: (state, action) => {
      state.lists = [...state.lists, action.payload]
    },
    createList: (state, action) => {
      state.lists = [ ...state.lists, action.payload]
    },
    emptyArr: () => {
      return []
    }
  }
})

const { fetchLists, createList, emptyArr} = listSlice.actions

export const fetchAllLists = (userId) => {
  return function (dispatch) {
    fetch(`${url}lists`)
    .then(r => r.json())
      .then(data => {

        dispatch(emptyArr)
        data.map(list => {
          if (list.user.id === userId) {
            return dispatch(fetchLists(list))
          }
          return data
        })
      })
  }
}

export const createNewList = (userId, name, color) => {
  return function (dispatch) {
    fetch(`${url}lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        name: name,
        color: color
      })
    })
      .then(r => r.json())
      .then(data => {
        const action = createList(data)
        dispatch(action)
      })
  }
}

export default listSlice.reducer