import React from 'react'
import '../styles/card.css'
import { deleteCurrentTask, toggleCompleted } from '../redux/task'
import { useDispatch } from 'react-redux'
import EditTaskModal from './EditTaskModal'

export default function Card({ lists, taskObj }) {

  const { id, completed } = taskObj

  // console.log("Tasks in Card component:", id, completed)
  
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(deleteCurrentTask(taskObj.id))
  }

  const handleCompleted = () => {
    dispatch(toggleCompleted(id, !completed))
  }

  return (
    <div className="card">
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
        <EditTaskModal lists={lists} taskObj={taskObj} />
      </div>
      {/* checkbox here that onClick toggles completed status in state from true to false */}
      <label>
        Completed?
        <input type="checkbox" onChange={e => handleCompleted(e.target.checked)} checked={completed}></input>
      </label>
    </div>
  )
}
