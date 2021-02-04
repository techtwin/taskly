import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/user';

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
    dispatch(signup(state))
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
