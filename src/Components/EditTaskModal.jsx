import React, { useState } from 'react'
import EditTaskForm from './EditTaskForm'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';

export default function EditTaskModal({ taskObj, lists }) {

  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <>
      <button
        className="editBtn"
        style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer"
      }}
        onClick={show}
      >
        Edit
      </button>
      <Rodal
        customStyles={{ borderRadius: "20px", display: "flex" }} 
        height={850}
        width={900}
        visible={visible} 
        onClose={hide} 
        animation="zoom" 
        showCloseButton={false}
      >
        <div>
          <img className="taskEdit-img" src="./Task.jpg" alt="task pic" />
        </div>
        <EditTaskForm taskObj={taskObj} hide={hide} lists={lists} />
      </Rodal>
    </>
  )
}
