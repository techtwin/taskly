import React, { useEffect } from 'react'
import '../styles/rightnav.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../redux/users'
import { logOut } from '../redux/user'
import { Link } from "react-router-dom";

const url = "http://localhost:3000/";

export default function RightNav() {

  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)

  // useEffect(() => {
  //   fetch(`${url}users`)
  //     .then(r => r.json())
  //     .then(users => {
  //       console.log("Right Nav:", users)
  //       const action = fetchAllUsers(users)
  //     dispatch(action)
  //   })
  // })

  const dispatch = useDispatch()

  const handleSignOut = () => {
    localStorage.removeItem("USER_DATA")
    dispatch(logOut)
  }
  
  return (
    <div className="rightNav">
      <div key={currentUser.id} className="accountInfo">
        <h1>{currentUser.name}</h1>
        <img className="userImg" src={currentUser.img} alt="user"/>
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
  )
}
