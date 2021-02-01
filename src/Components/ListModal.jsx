import React, { useState } from 'react'
import Rodal from 'rodal'

import 'rodal/lib/rodal.css';
import ListForm from './ListForm';

export default function ListModal() {

  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <div>
      <button onClick={show}>Add List</button>
      <Rodal
        customStyles={{ borderRadius: "20px" }} 
        visible={visible} 
        onClose={hide} 
        animation="zoom" 
        showCloseButton={false}
      >
        <ListForm />
      </Rodal>
    </div>
  )
}
