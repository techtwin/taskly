import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    fetchAllUsers: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { fetchAllUsers } = usersSlice.actions
export default usersSlice.reducer