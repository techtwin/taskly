import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../styles/midcontainer.css'
import { useDispatch } from 'react-redux'
import Card from '../Components/Card'
import { fetchAllTasks, fetchTasks } from '../redux/task'
import { fetchAllLists, fetchLists } from '../redux/list'
import ListModal from '../Components/ListModal'
import TaskModal from '../Components/TaskModal'

const url = "http://localhost:3000/";

export default function MidContainer() {

  const tasks = useSelector(({ tasks }) => tasks.tasks)
  const lists = useSelector(({ lists }) => lists.lists)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllTasks())
    dispatch(fetchAllLists())
  }, [dispatch])
  
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
