import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newFriend } from '../redux/user';
import '../styles/rightnav.css'
export default function AllUsersModal() {
  const allUsers = useSelector(({ currentUser }) => currentUser.users);
  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)
  const dispatch = useDispatch()

  const addFriend = (e) => {
    console.dir(e.target.id)
    e.preventDefault()
    dispatch(newFriend({ 
      requestor_id: currentUser.id,
      receiver_id: e.target.id
    }))
  }

  const usersMap = allUsers.map(user => (
    <div style={{ width: "100%", marginTop: "10px" }} className="allUsersDiv" key={user.id}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4 style={{ display: "inline-block", marginTop: "50px", marginLeft: "20px" }}>{user.name}</h4>
        <img style={{ width: "110px", height: "110px", objectFit: "contain", transform: "scale(0.3)", borderRadius: "46px" }} src={user.img} alt="user img" /><br />
      </div>
      <button id={user.id} className="addFriendBtn" onClick={addFriend}>Add</button>
      <hr className="friendDivHr" />
    </div>
  ))

  return (
    <div style={{ height: "400px", overflowY: "auto", paddingLeft: "10px" }}>
      {usersMap}
    </div>
  )
}
