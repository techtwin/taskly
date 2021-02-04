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
    }
  }
})

export const { logIn, signUp, logOut } = userSlice.actions

export const login = (userObj) => {
  return function (dispatch) {
    if (userObj === undefined) {
      const userDataStr = localStorage.getItem("USER_DATA");
      let userDataObj = JSON.parse(userDataStr);
      if (userDataObj) {
        console.log("user data from local storage", userDataObj);
        const action = logIn(userDataObj)
        dispatch(action);
      }
      return;
    }
    fetch(`${url}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application.json",
      },
      body: JSON.stringify(userObj),
    })
      .then(r => r.json())
      .then(data => {
        if (data.id) {
          console.log("found user", data.username);
          localStorage.setItem("USER_DATA", JSON.stringify(data));
          const action = logIn(data)
          dispatch(action);
        } else {
          console.log("user not found");
          window.alert("Wrong Username or Password Please Try Again");
        }
      })
    .catch(console.log)
  }
}
export default userSlice.reducer