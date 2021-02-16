import React from 'react'
import '../styles/rightnav.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOut } from '../redux/user'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import ProfileModal from '../Components/ProfileModal'
import Loading from '../Components/Loading'
import AllUsers from '../Components/AllUsers'

export default function RightNav() {

  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser)

  console.log("Current user in right nav:", currentUser)
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
      message: 'Are you sure you want to logout ?',
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
        <>
          <div key={currentUser.id} className="accountInfo">
            <h1>{currentUser.name}</h1>
            <img className="userImg" src={currentUser.img} alt="user img"/>
          </div>
          <ProfileModal />
          <button className="logoutBtn" onClick={logout}>Logout</button>
          <div className="addFriendDiv">
            <h1 className="addFriendH1">Add Friend</h1>
            {/* search bar should be here */}
            <AllUsers />
          </div>
          <div className="githubDiv">
            <h1 className="githubTitle">Checkout my Github here.</h1>
            <img className="gitman" src="./gitman.png" alt="avatar" />
            <a role="button" href="https://github.com/techtwins" target="_blank" rel="noreferrer" className="gitmanBtn">
              <img src="./github-btn.png" alt="github link" />
            </a>
          </div>
          {/* friend bar */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "20px",
            backgroundColor: "#f6f7fb93", 
            height: "100%", 
            width: "140px"
          }}>
            <br />
            <img style={{ marginTop: "-150px", marginLeft: "-245px", transform: "scale(0.25)" }} src="./group-friends.jpg" alt="friend group"/>
            <h1 style={{ 
              backgroundColor: "black", 
              color: "white", 
              marginTop: "-100px", 
              fontSize: "30px", 
              fontWeight: 800, 
              padding: "3px 0px"
            }}>
              Friends
            </h1>
            <div className="friendsDiv">
              {currentUser.requests_sent.map(friend => (
                <div key={friend.id} style={{ alignItems: "center", marginBottom: "20px", paddingLeft: "10px", paddingRight: "10px" }}>
                  <br />
                  <h2 style={{ marginTop: "30px", fontSize: "22px", fontWeight: 500 }}>{friend.name}</h2>
                  <img style={{ width: "110px", height: "110px", objectFit: "contain", transform: "scale(0.8)", borderRadius: "46px" }} src={friend.img} alt="friends"></img>
                </div>
              ))}
              {/* {currentUser.requests_received.map(friend => (
                <div key={friend.id} style={{ alignItems: "center", marginBottom: "20px", paddingLeft: "10px", paddingRight: "10px" }}>
                  <br />
                  <h2 style={{ marginTop: "30px", fontSize: "22px", fontWeight: 500 }}>{friend.name}</h2>
                  <img style={{ width: "110px", height: "110px", objectFit: "contain", transform: "scale(0.8)", borderRadius: "46px" }} src={friend.img} alt="friends"></img>
                </div>
              ))} */}
            </div>
          </div>
        </>
        : 
        // <p>I'm Loading...</p>
        <Loading />
      }
    </div>
  )
}
