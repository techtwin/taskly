import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload
    },
    signUp: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { logIn, signUp } = userSlice.actions
export default userSlice.reducer