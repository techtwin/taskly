import React, { useState } from 'react'
import Rodal from 'rodal'
import TaskForm from './TaskForm';
import 'rodal/lib/rodal.css';

export default function TaskModal() {

  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <div>
      <button onClick={show}>Create Task</button>
      <Rodal
        customStyles={{ borderRadius: "20px", display: "flex" }} 
        height={700}
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
        <TaskForm />
      </Rodal>
    </div>
  )
}
