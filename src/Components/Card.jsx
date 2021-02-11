import React from 'react'
import '../styles/card.css'
import { deleteCurrentTask, toggleCompleted } from '../redux/task'
import { useDispatch } from 'react-redux'
import EditTaskModal from './EditTaskModal'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function Card({ lists, taskObj }) {

  const { id, completed } = taskObj
  
  const dispatch = useDispatch()

  
  const deleteHandler = () => {
    dispatch(deleteCurrentTask(taskObj.id))
  }
  
  const remove = ({ onClose }) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to do this ?',
      buttons: [
        {
          label: 'Yes',
          onClick: deleteHandler
        },
        {
          label: 'No',
          onClick: onClose
        }
      ]
    });
  };

  const handleCompleted = () => {
    dispatch(toggleCompleted(id, !completed))
  }

  return (
  <>
      {
        completed ?
          <div className="card" style={{ backgroundColor: "#fddd8d"}}>
           {/* delete button */}
            <div className="deleteBtn">
              <button
                onClick={remove}
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
              <h1 style={{ display: "inline-block", float: "left"}}>{taskObj.name}</h1>
              <span style={{ float: "right", marginTop: "30px"}}>{taskObj.time}</span>
            </div>
            <div style={{marginRight: "300px", marginBottom: "30px"}}>
              <label style={{ marginTop: "50px"}} className="completedMark">
                Completed ?
              </label>
              <input type="checkbox" onChange={e => handleCompleted(e.target.checked)} checked={completed}></input>
            </div>
          </div>
          
          :

          <div className="card">
            {/* delete button */}
            <div className="deleteBtn">
              <button
                onClick={remove}
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
            <label className="completedMark">
              Completed ?
            </label>
            <input type="checkbox" onChange={e => handleCompleted(e.target.checked)} checked={completed}></input>
            <EditTaskModal lists={lists} taskObj={taskObj} />
      </div>
      }
  </>
  )
}
