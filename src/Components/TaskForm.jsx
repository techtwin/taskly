import React, { useState } from 'react'
import { createTask } from '../redux/task';
import { useDispatch } from 'react-redux'

const url = "http://localhost:3000/";

export default function TaskForm() {

  const [state, setState] = useState({ name: "", description: "", date: "", time: "", list_id: null})
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    fetch(`${url}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(r => r.json())
      .then(data => {
        const action = createTask(data)
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
    <div className="taskForm">
      <form onSubmit={submitHandler}>
        <h1>Choose List</h1>
        <select>
          <option></option>
        </select>
        <h1>Name</h1>
        <input name="name" value={state.name} onChange={changeHandler} placeholder="Name"></input><br /><br />
        <h1>Date</h1>
        <input type="date" name="date" value={state.date} onChange={changeHandler} placeholder="Date"></input><br /><br />
        <h1>Time</h1>
        <input type="time" name="time" value={state.time} onChange={changeHandler} placeholder="Time"></input><br /><br />
        <h1>Description</h1>
        <textarea type="description" name="description" value={state.description} onChange={changeHandler} placeholder="Description"></textarea><br /><br />
        <button style={{ color: "white", backgroundColor: "#F8D57E"}}>Submit</button>
      </form>
    </div>
  )
}
