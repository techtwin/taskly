import React, { useState } from 'react'
import { createList } from '../redux/list';
import { useDispatch } from 'react-redux'

const url = "http://localhost:3000/";

export default function ListForm() {

  const [state, setState] = useState({ name: "", color: ""})
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    fetch(`${url}lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(r => r.json())
      .then(data => {
        const action = createList(data)
        dispatch(action)
        console.log(data)
      })
  }

  const changeHandler = e => {
    const key = e.target.name
    const value = e.target.value
    setState({ ...state, [key]: value })
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Name</h1>
        <input name="name" value={state.name} onChange={changeHandler} placeholder="Name"></input><br /><br />
        <h1>Color</h1>
        <input type="color" name="color" value={state.color} onChange={changeHandler} placeholder="Color"></input><br /><br />
        <button style={{ color: "white", backgroundColor: "#F8D57E"}}>Submit</button>
      </form>
    </>
  )
}
