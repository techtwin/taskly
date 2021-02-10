import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllTasks } from '../redux/task'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import '../styles/leftnav.css'

moment.locale("en-US")
const localizer = momentLocalizer(moment)

export default function LeftNav() {

  const tasks = useSelector(({ tasks }) => tasks.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllTasks())
  }, [dispatch])

  const allTasks = () => {
    return tasks.map(task => {
      if (task.completed) {
        return null
      } else {
        return {
          title: task.name,
          start: moment(task.date),
          end: moment(task.date),
          allDay: true,
          resourceId: 10,
          tooltipAccessor: task.name
        }
      }
    })
  }

  return (
    <div className="leftCont">
      <img style={{ marginTop: "10px", marginLeft: "40px", marginBottom: "50px" }} src="./Logo.png" alt="logo" />
      <Calendar
        localizer={localizer}
        events={allTasks()}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        style={{ margin: "4%", height: 700}}
      />
    </div>
  )
}

