import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/rightnav.css'

export default function Profile({ hide }) {
  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)

  return (
    <div className="profilePg">
      <div className="profileContent">
        <h1>User Account</h1>
        <hr className="profileHr" />
        <img src={currentUser.img} alt="user avatar" />
        <br />
        <button>Change image</button>
        <h2 style={{ marginBottom: "40px"}}>{currentUser.name}</h2>
        <button className="profileSaveBtn">Save Changes</button>
        <button className="profileCancelBtn" onClick={hide}>Cancel</button>
      </div>
    </div>
  )
}
