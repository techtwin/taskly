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
        customStyles={{ borderRadius: "20px" }} 
        height={550}
        width={700}
        visible={visible} 
        onClose={hide} 
        animation="zoom" 
        showCloseButton={false}
      >
        <TaskForm />
      </Rodal>
    </div>
  )
}
