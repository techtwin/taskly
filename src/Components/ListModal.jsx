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
        customStyles={{ borderRadius: "20px", display: "flex" }} 
        height={340}
        width={650}
        visible={visible} 
        onClose={hide} 
        animation="zoom" 
        showCloseButton={false}
      >
        <div className="list-img">
          <img src="./List.jpg" alt="list pic" style={{
            objectFit: "contain",
            width: "300px",
            textAlign: "left",
            marginLeft: "20px",
            marginRight: "40px",
            marginTop: "20px",
            borderRadius: "20px"
          }} />
        </div>
        <ListForm />
      </Rodal>
    </div>
  )
}
