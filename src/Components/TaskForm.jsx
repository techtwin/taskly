import React, { useState } from 'react'
import { createNewTask } from '../redux/task';
import { useDispatch } from 'react-redux'
import Select from 'react-select'

export default function TaskForm({ lists, hide }) {

  const [state, setState] = useState({ name: "", description: "", date: "", time: "", list_id: null })
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    dispatch(createNewTask(state))
  }

  const changeHandler = e => {
    const key = e.target.name
    const value = e.target.value
    setState({ ...state, [key]: value })
  }

  const options = lists.map(list => {
    return { key: list.id, label: list.name || list.id, value: list.id }
  })

  const listClickHandler = (e) => {
    console.log("lists click handler:", e)
    setState({ list_id: e.value })
  }

  return (
    <div className="taskForm">
      <form onSubmit={submitHandler}>
        <h1>Choose List</h1>
        <Select options={options} onChange={listClickHandler}/>
        <h1>Name</h1>
        <input type="text" name="name" value={state.name} onChange={changeHandler} placeholder="Name"></input><br /><br />
        <h1>Date</h1>
        <input type="date" name="date" value={state.date} onChange={changeHandler} placeholder="Date"></input><br /><br />
        <h1>Time</h1>
        <input type="time" name="time" value={state.time} onChange={changeHandler} placeholder="Time"></input><br /><br />
        <h1>Description</h1>
        <textarea type="text" name="description" value={state.description} onChange={changeHandler} placeholder="Description"></textarea><br /><br />
        <button
          onClick={hide}
          className="modalSubmitBtn"
          style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "#F8D57E",
          borderRadius: "20px",
          border: "none",
          marginTop: "10px",
          padding: "10px",
          width: "200px",
          fontSize: "20px",
        }}>Submit</button>
      </form>
    </div>
  )
}
