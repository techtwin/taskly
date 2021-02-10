import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <div className="userForms">
        <Login />
        <div className="formHr">
          <hr />
        </div>
        <Signup />
      </div>
    </>
  )
}
