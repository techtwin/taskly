import { configureStore } from "@reduxjs/toolkit"
import userReducer from './user'
import taskReducer from './task'
import listReducer from './list'

const store = configureStore({
  reducer: {
    currentUser: userReducer,
    lists: listReducer,
    tasks: taskReducer,
  }
})

export default store