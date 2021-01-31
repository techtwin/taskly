import React from 'react'

export default function Card({ taskObj }) {

  return (
    <div className="card">
      <div className="cardContent">
        <h1>{taskObj.name}</h1>
        <span>{taskObj.date}</span> - <span>{taskObj.time}</span><br /><br />
        <h2>{taskObj.color}</h2>
        <p>{taskObj.description}</p><br />
      </div>
    </div>
  )
}
