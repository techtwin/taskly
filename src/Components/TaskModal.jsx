import React, { useState } from 'react'
import Rodal from 'rodal'
import TaskForm from './TaskForm';
import 'rodal/lib/rodal.css';

export default function TaskModal({ lists }) {

  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <>
      <img className="addTaskBtn" onClick={show} src="./add-task.png" alt=""/>
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
          <img className="task-img" src="./Task.jpg" alt="task pic" />
        </div>
        <TaskForm hide={hide} lists={lists} />
      </Rodal>
    </>
  )
}
