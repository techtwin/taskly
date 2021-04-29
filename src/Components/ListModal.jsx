import React, { useState } from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import ListForm from './ListForm';

export default function ListModal({ currentUser }) {

  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <>
      <h1 style={{ display: "inline-block", marginLeft: "100px", fontWeight: 600 }}>Your Agenda</h1>
      <button className="listModalBtn" onClick={show}>
        New List
      </button>
      <Rodal
        customStyles={{ borderRadius: "20px", display: "flex" }} 
        height={380}
        width={650}
        visible={visible} 
        onClose={hide} 
        animation="zoom" 
        showCloseButton={false}
      >
        <div>
          <img className="list-img" src="./list-img.jpg" alt="list pic" />
        </div>
        <ListForm currentUser={currentUser} hide={hide} />
      </Rodal>
    </>
  )
}
