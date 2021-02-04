import React from 'react'
import '../styles/card.css'
import { deleteTask } from '../redux/task'
import { useDispatch } from 'react-redux'

const url = "http://localhost:3000/";

export default function Card({ taskObj }) {

  const dispatch = useDispatch()

  const deleteHandler = (taskId) => {
    fetch(`${url}tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(r => r.json())
    .then(dispatch(deleteTask(taskObj.id)))
  }

  return (
    <div className="card">
      <div className="cardBtns">
        <button onClick={deleteHandler} style={{
          backgroundColor: "transparent",
          border: "none",
          marginTop: "15px",
          transform: "scale(0.7)"
        }}>
          <img src="./Move.png" alt="delete button"/>
        </button>
      </div>
      <div className="cardContent">
        <h1>{taskObj.name}</h1>
        <span>{taskObj.date}</span> - <span>{taskObj.time}</span><br /><br />
        <h2>{taskObj.color}</h2>
        <p>{taskObj.description}</p><br />
      </div>
    </div>
  )
}
