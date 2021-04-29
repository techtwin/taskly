import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="formDiv">
      <div className="userForms">
        <img className="homepgLogo" src="./Logo.png" alt="logo img"/>
        <Login />
        <div className="formHr">
          <hr />
        </div>
        <Signup />
      </div>
    </div>
  )
}
