import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/user';

const url = "http://localhost:3000/";

export default function Login() {
  const [state, setState] = useState({ username: "", password: "" })
  const dispatch = useDispatch()

  const changeHandler = e => {
    const key = e.target.name
    const value = e.target.value
    setState({ ...state, [key]: value })
  }

  const submitHandler = () => {
    if (state === undefined) {
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
      body: JSON.stringify(state),
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
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Log In</h1>
        <input type="text" value={state.username} name="username" onChange={changeHandler} placeholder="Username" />
        <input type="password" value={state.password} name="password" onChange={changeHandler} placeholder="Password" />
        <button>Log In</button>
      </form>
    </>
  )
}
