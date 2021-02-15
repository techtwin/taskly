import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newFriend, removeFriend } from '../redux/user';
import '../styles/rightnav.css'
export default function AllUsers() {
  const allUsers = useSelector(({ currentUser }) => currentUser.users);
  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)
  const dispatch = useDispatch()

  const addFriend = (e) => {
    dispatch(newFriend({ 
      requestor_id: currentUser.id,
      receiver_id: e.target.id
    }))
  }

  const unFriend = (e) => {
    dispatch(removeFriend(currentUser.id, e.target.id))
  }
  
  const alreadyFriends = (id) => {
    if (currentUser.requests_sent){
      let arr = currentUser.requests_sent.map(user => user.id)
      let arr2 = currentUser.requests_received.map(user => user.id)
      return (
        arr.includes(id)
        // arr2.includes(id)
      )
    }
  }

  const usersMap = allUsers.map(user => (
    <div style={{ width: "100%", marginTop: "10px" }} className="allUsersDiv" key={user.id}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4 style={{ display: "inline-block", marginTop: "50px", marginLeft: "20px" }}>{user.name}</h4>
        <img style={{ width: "110px", height: "110px", objectFit: "contain", transform: "scale(0.3)", borderRadius: "46px" }} src={user.img} alt="user img" /><br />
      </div>
      {user.id !== currentUser.id && !alreadyFriends(user.id)
        ?
        <button id={user.id} className="addFriendBtn" onClick={addFriend}>Add</button>
        :
        null
      }
      {user.id !== currentUser.id && alreadyFriends(user.id)
        ?
        <button style={{ backgroundColor: "black", color: "white", fontWeight: 800 }} id={user.id} onClick={unFriend} className="addFriendBtn">Delete</button>
        :
        null
      }
      <hr className="friendDivHr" />
    </div>
  ))

  return (
    <div style={{ height: "400px", overflowY: "auto", paddingLeft: "10px", paddingBottom: "30px" }}>
      {usersMap}
    </div>
  )
}
