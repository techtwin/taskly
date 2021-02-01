import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload
    },
    signUp: (state, action) => {
      state.user = action.payload
    }
  }
})

export default userSlice.reducer