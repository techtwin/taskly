import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/user';

export default function Login() {
  const [state, setState] = useState({ username: "", password: "" })
  const dispatch = useDispatch()

  const changeHandler = e => {
    const key = e.target.name
    const value = e.target.value
    setState({ ...state, [key]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(state))
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
