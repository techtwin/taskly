import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/user';

export default function Signup() {

  const [state, setState] = useState({ username: "", name: "", password: "", img: './default-profile.png' })
  const dispatch = useDispatch()
  const { img, password, name, username } = state

  const changeHandler = e => {
    const key = e.target.name
    const value = e.target.value
    setState({ ...state, [key]: value })
  }

  const submitHandler = e => {
    e.preventDefault()
    dispatch(signup(state))
  }

  const handlefileChange = (e) => {
    console.log(e.target.files[0])
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setState({ ...state, img: reader.result })
        // setState({ ...state, [e.target.name]: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
    // setState({ ...state, [e.target.name]: e.target.files[0] })
  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input required type="text" value={username} name="username" onChange={changeHandler} placeholder="Username" />
        <input required type="text" value={name} name="name" onChange={changeHandler} placeholder="Name" />
        <input required type="password" value={password} name="password" onChange={changeHandler} placeholder="Password" />
        <br /><br />
        <div className="imageHolder">
          <img src={img} alt="" className="img"/>
        </div>
        <input required id="files" type="file" name="img" accept="image/*" onChange={handlefileChange} />
        <div className="label">
          <label style={{ display: "inline-block", marginTop: "40px"}} className="image-upload" htmlFor="files">Upload image</label><br />
        </div>
        <button>Sign Up</button>
      </form>
    </>
  )
}
