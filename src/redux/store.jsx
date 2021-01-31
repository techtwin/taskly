import { configureStore } from "@reduxjs/toolkit"
import userReducer from './users'
import taskReducer from './task'
import listReducer from './list'

const store = configureStore({
  reducer: {
    users: userReducer,
    lists: listReducer,
    tasks: taskReducer,
  }
})

export default store