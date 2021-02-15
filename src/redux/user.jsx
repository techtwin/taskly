import { createSlice } from '@reduxjs/toolkit'
const url = "http://localhost:3000/";

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null, friendRequests: [], users: [] },
  reducers: {
    logIn: (state, action) => {
      state.currentUser = action.payload
    },
    signUp: (state, action) => {
      state.currentUser = action.payload
    },
    logOut: (state, action) => {
      state.currentUser = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    updateUser: (state, action) => {
      state.currentUser = action.payload
    },
    fetchAllUsers: (state, action) => {
      state.users = action.payload
    },
    addFriend: (state, action) => {
      state.friendRequests = [action.payload, ...state.friendRequests]
    },
    deleteFriend: (state, action) => {
      const newArr = [...state.friendRequests]
      state.friendRequests = newArr.filter((friend) => friend.id !== action.payload)
    }
  }
})

export const {
  logIn,
  signUp, 
  logOut, 
  setCurrentUser, 
  updateUser, 
  fetchAllUsers, 
  addFriend, 
  deleteFriend
} = userSlice.actions

export const login = (userObj) => {
  return function (dispatch) {
    fetch(`${url}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(r => r.json())
      .then(data => {
        if (data.user && data.token) {
          const token = data.token
          localStorage.setItem("token", token)
          dispatch(setCurrentUser(data.user))
        } else {
          window.alert("Please try again. Incorrect username or password.")
        }
    })
  }
}

export const checkLogin = (token) => {
  return function (dispatch) {
    fetch(`${url}profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(data => {
        dispatch(setCurrentUser(data))
      })
  }
}

export const signup = (userObj) => {
  return function (dispatch) {
    const form = new FormData()
    form.append("username", userObj.username)
    form.append("name", userObj.name)
    form.append("password", userObj.password)
    form.append("img", userObj.img)

    fetch(`${url}register`, {
      method: "POST",
      body: form
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      if (data.user && data.token) {
        const token = data.token
        console.log("successfully created user", data.username)
        localStorage.setItem("token", token);
        const action = setCurrentUser(data.user)
        dispatch(action)
      } else {
        console.log("user sign up failed")
        window.alert("Please enter a username and password")
      }
    })
  }
}

export const editProfile = (userId, name) => {
  return function (dispatch) {
    fetch(`${url}users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(name)
    })
      .then(r => r.json())
      .then(updatedUser => {
        console.log(updatedUser)
        const action = updateUser(updatedUser)
        dispatch(action)
      })
  }
}

export const getAllUsers = () => {
  return function (dispatch) {
    const token = localStorage.getItem("token")
    fetch(`${url}users`, {
      headers: {
        // "Content-Type": "application/json"
        "Authorization": `Bearer ${token}`
      },
    })
      .then((r) => r.json())
      .then((usersArray) => {
        dispatch(fetchAllUsers(usersArray))
      }
      );
  };
};


// Friend System // 

export const newFriend = (friendObj) => {
  return function (dispatch) {
    fetch(`${url}friend_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(friendObj)
    })
      .then(r => r.json())
      .then(newFriend => {
        console.log("new friend:", newFriend.friendrequest.receiver)
        dispatch(addFriend(newFriend))
    })
  }
}

export const removeFriend = (requestorId, receiverId) => {
  return function (dispatch) {
    fetch(`${url}friend_requests/${requestorId}&${receiverId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(dispatch(deleteFriend(receiverId)))
  }
}

export default userSlice.reducer