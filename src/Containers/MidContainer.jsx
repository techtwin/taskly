import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../styles/midcontainer.css'
import { useDispatch } from 'react-redux'
import Card from '../Components/Card'
import { fetchTasks } from '../redux/task'

const url = "http://localhost:3000/";

export default function MidContainer() {

  const tasks = useSelector(({ tasks }) => tasks.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${url}tasks`)
    .then(r => r.json())
    .then((tasks) => {
      const action = fetchTasks(tasks)
      console.log(action)
      dispatch(action)
    })
  }, [dispatch])
  
  console.log("MidContainer userSelector:", tasks)
  return (
    <div>
      {tasks.map(task => (
        <Card 
          key={task.id}
          taskObj={task}
        />
      ))}
    </div>
  )
}
