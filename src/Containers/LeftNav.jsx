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
  console.log("In leftnav:", tasks)
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
          resourceId: task.id,
          tooltipAccessor: task.name
        }
      }
    })
  }

  // const eventStyleGetter = (event, start, end, isSelected) => {

  // }

  return (
    <div className="leftCont">
      <img style={{ marginTop: "10px", marginLeft: "40px", marginBottom: "50px" }} src="./Logo.png" alt="logo" />
      <Calendar
        localizer={localizer}
        events={allTasks()}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        eventPropGetter={event => {
          console.log("calendar eventprop:", event)
          const mappedTasks = tasks.map(task => task.list.color);
          const backgroundColor = mappedTasks
          return { style: { backgroundColor } };
        }}
        style={{ margin: "6%", height: 700, boxShadow: "15px 25px #e5e6eb5e" }}
        // toolbar={false}
      />
    </div>
  )
}
// box-shadow: 15px 25px #e5e6eb5e;

