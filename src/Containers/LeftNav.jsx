import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllTasks } from '../redux/task'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import '../styles/leftnav.css'

export default function LeftNav() {

  const tasks = useSelector(({ tasks }) => tasks.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllTasks())
  }, [dispatch])

  return (
    <div className="leftCont">
      <img style={{ marginTop: "10px", marginLeft: "40px", marginBottom: "50px"}} src="./Logo.png" alt="logo" />
    </div>
  )
}

