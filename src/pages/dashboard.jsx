import React from 'react'
import LeftNav from '../Containers/LeftNav'
import MidContainer from '../Containers/MidContainer'
import RightNav from '../Containers/RightNav'

export default function Dashboard() {
  return (
    <div>
      <LeftNav />
      <MidContainer />
      <RightNav />
    </div>
  )
}
