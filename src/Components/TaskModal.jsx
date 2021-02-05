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
    <div>
      <img className="addTaskBtn" onClick={show} src="./add-task.png" alt=""/>
      <Rodal
        customStyles={{ borderRadius: "20px", display: "flex" }} 
        height={800}
        width={900}
        visible={visible} 
        onClose={hide} 
        animation="zoom" 
        showCloseButton={false}
      >
        <div className="list-img">
          <img src="./Task.jpg" alt="task pic" style={{
            objectFit: "contain",
            width: "420px",
            textAlign: "left",
            marginLeft: "20px",
            marginRight: "40px",
            marginTop: "80px",
            borderRadius: "20px"
          }} />
        </div>
        <TaskForm hide={hide} lists={lists} />
      </Rodal>
    </div>
  )
}
