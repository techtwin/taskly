import React from 'react'
import '../styles/card.css'
import { deleteCurrentTask } from '../redux/task'
import { useDispatch } from 'react-redux'

export default function Card({ lists, taskObj }) {

  console.log("Tasks in Card component:", taskObj)


  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(deleteCurrentTask(taskObj.id))
  }

  return (
    <div className="card slide-in-fwd-center">
        {/* delete button */}
      <div className="deleteBtn">
        <button
          onClick={deleteHandler}
          style={{
          backgroundColor: "transparent",
          border: "none",
          marginTop: "15px",
          transform: "scale(0.7)"
        }}>
          <img src="./Move.png" alt="delete button"/>
        </button>
      </div>
        {/* card content */}
      <div className="cardContent">
        <h1>{taskObj.name}</h1>
        <span>{taskObj.date}</span> - <span>{taskObj.time}</span><br /><br />
        <div className="listTypeDiv">
          <h2
            style={{ backgroundColor: `${taskObj.list.color}` }}
          >
            {taskObj.list.name}
          </h2>
        </div>
        <p style={{ paddingRight: "90px"}}>{taskObj.description}</p><br />
      </div>
        {/* edit button */}
      <div className="editBtn">
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer"
          }}
        >
          Edit
        </button>
      </div>
    </div>
  )
}
