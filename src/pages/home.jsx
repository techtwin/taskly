import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

export default function Home() {
  return (
    <>
      <div className="userForms">
        <Login />
        --------- OR ---------
        <Signup />
      </div>
    </>
  )
}
