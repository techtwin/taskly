import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import { newFriend } from '../redux/user';

export default function AllUsersModal() {
  const allUsers = useSelector(({ currentUser }) => currentUser.users);
  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  const testClick = (e) => {
    console.log(e.target.value)
    dispatch(newFriend({ 
      requestor_id: currentUser.id,
      receiver_id: 5
    }))
  }

  const usersMap = allUsers.map(user => (
    <div style={{ paddingTop: "40px" }} className="allUsersDiv" key={user.id}>
      <img style={{ width: "120px", height: "120px" }} src={user.img} alt="user img" /><br />
      <h1 style={{ display: "inline-block" }}>{user.name}</h1>
      <button onClick={testClick}><img src="./add-btn2.png" alt="add friend button" /></button>
    </div>
  ))

  return (
    <>
      <button className="addFriendBtn" onClick={show}><img src="./add-btn2.png" alt="add friend button"/></button>
      <Rodal
        customStyles={{ overflowY: "auto", borderRadius: "20px", display: "flex" }} 
        height={800}
        width={900}
        visible={visible} 
        onClose={hide} 
        animation="zoom"
        leaveAnimation="door"
        showCloseButton={false}
      >
        <>
          {usersMap}
        </>
      </Rodal>
    </>
  )
}
