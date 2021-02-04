import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    logIn: (state, action) => {
      state.currentUser = action.payload
    },
    signUp: (state, action) => {
      state.currentUser = action.payload
    },
    logOut: (state, action) => {
      state.currentUser = action.payload
    }
  }
})

export const { logIn, signUp, logOut } = userSlice.actions
export default userSlice.reducer