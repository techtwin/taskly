import { createSlice } from '@reduxjs/toolkit'
const url = "http://localhost:3000/";

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
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    }
  }
})

export const { logIn, signUp, logOut, setCurrentUser } = userSlice.actions

export const login = (userObj) => {
  return function (dispatch) {
    fetch(`${url}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(r => r.json())
      .then(data => {
        if (data.user && data.token) {
          const token = data.token
          localStorage.setItem("token", token)
          dispatch(setCurrentUser(data.user))
        } else {
          window.alert("Please try again. Incorrect username or password.")
        }
        // dispatch(setCurrentUser(data.user))
        // localStorage.setItem("token", data.token)
    })
  }
}

export const checkLogin = (token) => {
  return function (dispatch) {
    fetch(`${url}/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(data => dispatch(setCurrentUser(data)))
  }
}

export const signup = (userObj) => {
  return function (dispatch) {
    fetch(`${url}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        if (data.user && data.token) {
          const token = data.token
          console.log("successfully created user", data.username)
          localStorage.setItem("token", token);
          const action = setCurrentUser(data.user)
          dispatch(action)
        } else {
          console.log("user sign up failed")
          window.alert("Please enter a username and password")
        }
      })
    .catch(console.log)
  }
}





export default userSlice.reducer