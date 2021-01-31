import { configureStore } from "@reduxjs/toolkit"
import usersReducer from './users'
import taskReducer from './task'
import listReducer from './list'

const store = configureStore({
  reducer: {
    users: usersReducer,
    lists: listReducer,
    tasks: taskReducer,
  }
})

export default store