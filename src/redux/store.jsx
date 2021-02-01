import { configureStore } from "@reduxjs/toolkit"
import usersReducer from './users'
import userReducer from './user'
import taskReducer from './task'
import listReducer from './list'

const store = configureStore({
  reducer: {
    currentUser: userReducer,
    users: usersReducer,
    lists: listReducer,
    tasks: taskReducer,
  }
})

export default store