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
      <h1 style={{ display: "inline-block", marginLeft: "100px" }}>Your Agenda</h1>
      <button
        className="listModalBtn"
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "black",
          display: "inline-block",
          borderRadius: "20px",
          border: "none",
          marginLeft: "120px",
          marginBottom: "50px",
          padding: "10px",
          width: "200px",
          fontSize: "20px",
          fontWeight: 900
        }}
        onClick={show}
      >
        New List
      </button>
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
          <img src="./list-img.jpg" alt="list pic" style={{
            objectFit: "contain",
            width: "300px",
            textAlign: "left",
            marginLeft: "20px",
            marginRight: "40px",
            marginTop: "50px",
            borderRadius: "20px"
          }} />
        </div>
        <ListForm currentUser={currentUser} hide={hide} />
      </Rodal>
    </>
  )
}
