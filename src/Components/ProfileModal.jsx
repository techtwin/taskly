import React, { useState } from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import Profile from '../Components/Profile'

export default function ProfileModal() {
  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <>
      <button onClick={show} className="mySettings">My Settings</button>
      <Rodal
        customStyles={{ borderRadius: "20px", display: "flex" }} 
        height={420}
        width={700}
        visible={visible} 
        onClose={hide} 
        animation="door" 
        showCloseButton={true}
      >
        <Profile hide={hide} />
      </Rodal>
    </>
  )
}
