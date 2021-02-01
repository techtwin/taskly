import React, { useState } from 'react'

export default function ListForm() {

  const [state, setState] = useState({ name: "", color: ""})

  const changeHandler = e => {
    const key = e.target.name
    const value = e.target.value
    setState({ ...state, [key]: value })
  }

  return (
    <>
      <form>
        <header>Name</header>
        <input name="name" value={state.name} onChange={changeHandler} placeholder="Name"></input>
        <header>Color</header>
        <input type="color" name="color" value={state.color} onChange={changeHandler} placeholder="Color"></input>
        <button style={{ color: "white", backgroundColor: "#F8D57E"}}>Submit</button>
      </form>
    </>
  )
}
