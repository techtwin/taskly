import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../styles/midcontainer.css'
import { useDispatch } from 'react-redux'
import Card from '../Components/Card'
import { fetchTasks } from '../redux/task'
import { fetchLists } from '../redux/list'
import ListModal from '../Components/ListModal'
import TaskModal from '../Components/TaskModal'

const url = "http://localhost:3000/";

export default function MidContainer() {

  const tasks = useSelector(({ tasks }) => tasks.tasks)
  const lists = useSelector(({ lists }) => lists.lists)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${url}tasks`)
    .then(r => r.json())
    .then((tasks) => {
      const action = fetchTasks(tasks)
      console.log(action)
      dispatch(action)
    })

    fetch(`${url}lists`)
    .then(r => r.json())
    .then((lists) => {
      const action = fetchLists(lists)
      console.log(action)
      dispatch(action)
    })

  }, [])
  
  return (
    <div className="middleCont">
      <ListModal />
      <TaskModal lists={lists} />
      <div className="cardCont">
        {tasks.map(task => (
          <Card 
            key={task.id}
            taskObj={task}
          />
        ))}
      </div>
    </div>
  )
}
