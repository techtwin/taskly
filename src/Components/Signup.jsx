import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../redux/user';

const url = "http://localhost:3000/";

export default function Signup() {

  const [state, setState] = useState({ username: "", name: "", password: "" })
  const dispatch = useDispatch()

  const changeHandler = e => {
    const key = e.target.name
    const value = e.target.value
    setState({ ...state, [key]: value })
  }

  const submitHandler = e => {
    e.preventDefault()
    fetch(`${url}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        if (data.id) {
          console.log("successfully created user", data.username)
          localStorage.setItem("USER_DATA", JSON.stringify(data));
          const action = signUp(data)
          dispatch(action)
          setState({ username: "", name: "", password: ""})
        } else {
          console.log("user sign up failed")
          window.alert("Please enter a username and password")
        }
      })
    .catch(console.log)
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input type="text" value={state.username} name="username" onChange={changeHandler} placeholder="Username" />
        <input type="text" value={state.name} name="name" onChange={changeHandler} placeholder="Name" />
        <input type="password" value={state.password} name="password" onChange={changeHandler} placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </>
  )
}
