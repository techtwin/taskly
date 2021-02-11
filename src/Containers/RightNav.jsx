import React from 'react'
import '../styles/rightnav.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOut } from '../redux/user'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function RightNav() {

  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    localStorage.removeItem("token")
    dispatch(logOut)
    history.push("/")
  }

  const logout = ({ onClose }) => {
    confirmAlert({
      title: 'Confirm to logout',
      message: 'Are you sure want to logout ?',
      buttons: [
        {
          label: 'Yes',
          onClick: handleSignOut
        },
        {
          label: 'No',
          onClick: onClose
        }
      ]
    });
  };

  return (
    <div className="rightNav">
      {currentUser
        ?
        <div>
          <div key={currentUser.id} className="accountInfo">
            <h1>{currentUser.name}</h1>
            <img className="userImg" src={currentUser.img} alt="user img"/>
          </div>
          <span className="mySettings">My settings</span>
          <button className="logoutBtn" onClick={logout}>Logout</button>
          <div className="githubDiv">
            <h1 className="githubTitle">Checkout my Github here.</h1>
            <img className="gitman" src="./gitman.png" alt="avatar" />
            <a role="button" href="https://github.com/techtwins" target="_blank" rel="noreferrer" className="gitmanBtn">
              <img src="./github-btn.png" alt="github link" />
            </a>
          </div>
        </div>
        : 
        <p>Im loading...</p>}
    </div>
  )
}
