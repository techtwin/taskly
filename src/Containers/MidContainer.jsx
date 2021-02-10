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

  const tasks = useSelector(({ tasks }) => tasks.tasks)
  const lists = useSelector(({ lists }) => lists.lists)
  const dispatch = useDispatch()

  console.log("In Midcont tasks:", tasks)
  // console.log(tasks)

  useEffect(() => {
    dispatch(fetchAllTasks())
    dispatch(fetchAllLists())
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
      <ListModal />
      <TaskModal lists={lists} />
      <div className="cardContainer">
        {allTasks}
      </div>
    </div>
  )
}
