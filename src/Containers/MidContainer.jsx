import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../styles/midcontainer.css'
import { useDispatch } from 'react-redux'
import Card from '../Components/Card'


export default function MidContainer() {

  // const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()


  useEffect(() => {
    // dispatch(fetchAllTasks())
  }, [dispatch])

  // console.log(tasks)
  return (
    <div>
      {/* {tasks.map(task => (
        <Card 
          key={task.id}
          name={task.name}
          description={task.description}
          date={task.date}
          time={task.time}
          taskObj={task}
        />
      ))} */}
    </div>
  )
}
