import React from 'react'
import '../styles/rightnav.css'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/user'
import { Link } from "react-router-dom";

export default function RightNav() {

  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)

  const dispatch = useDispatch()

  const handleSignOut = () => {
    localStorage.removeItem("token")
    dispatch(logOut)
  }

  return (
    <div className="rightNav">
      {currentUser
        ?
        <div>
          <div key={currentUser.id} className="accountInfo">
            <h1>{currentUser.name}</h1>
            <img className="userImg" src={currentUser.img} alt="user img"/>
          </div>
          <Link to="/"><button onClick={handleSignOut}>Logout</button></Link>
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
