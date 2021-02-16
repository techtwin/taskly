import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/rightnav.css'
import EditableLabel from 'react-inline-editing'
import { editProfile } from '../redux/user'

export default function Profile({ hide }) {
  
  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)
  const [state, setState] = useState({ name: currentUser.name })
  const dispatch = useDispatch()

  useEffect(() => {
  }, [state])

  const editedName = (text) => {
    setState({ name: text })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const id = currentUser.id
    dispatch(editProfile(id, state))
  }

  return (
    <div className="profilePg">
      <div className="profileContent">
        <form onSubmit={submitHandler}>
          <h1>User Account</h1>
          <hr className="profileHr" />
          <img src={currentUser.img} alt="user avatar" />
          <br />
          {/* <button style={{ marginBottom: "30px"}} type="button">Change image</button> */}
          <EditableLabel
            text={currentUser.name}
            inputWidth='140px'
            inputHeight='10px'
            labelFontWeight='bold'
            labelFontSize="28px"
            onFocusOut={editedName}
          /><br /><br /><br />
          <button type="submit" className="profileSaveBtn">Save Changes</button>
          <button type="button" className="profileCancelBtn" onClick={hide}>Cancel</button>
        </form>
      </div>
    </div>
  )
}