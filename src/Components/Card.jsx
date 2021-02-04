import React from 'react'
import '../styles/card.css'
import { deleteCurrentTask } from '../redux/task'
import { useDispatch } from 'react-redux'

export default function Card({ taskObj }) {

  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(deleteCurrentTask(taskObj.id))
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
