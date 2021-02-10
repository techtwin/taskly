import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../styles/midcontainer.css'
import { useDispatch } from 'react-redux'
import Card from '../Components/Card'
import { fetchAllTasks } from '../redux/task'
import { fetchAllLists } from '../redux/list'
import ListModal from '../Components/ListModal'
import TaskModal from '../Components/TaskModal'

export default function MidContainer() {

  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser);
  const tasks = useSelector(({ tasks }) => tasks.tasks)
  const lists = useSelector(({ lists }) => lists.lists)
  const dispatch = useDispatch()
  // const id = currentUser.id

  console.log("Mid Cont:", tasks)
  console.log("Current user in mid cont", currentUser)

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchAllLists(currentUser.id))
      dispatch(fetchAllTasks(currentUser.id))
    } else {
      <p>I'm Loading...</p>
    }
  }, [dispatch])

  const allTasks = tasks.map(task => (
    <Card 
      lists={lists}
      key={task.id}
      taskObj={task}
    />
  ))

  return (
    <div className="middleCont">
      <ListModal currentUser={currentUser}/>
      <TaskModal lists={lists} />
      <div className="cardContainer">
        {allTasks}
      </div>
    </div>
  )
}
