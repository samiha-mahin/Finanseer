import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'

const Dashboard = () => {
  return (
    <div className='flex  mx-4 p-4 justify-between text-gray-300'>
        <Row1/>
        <Row2/>
        <Row3/>
    </div>
  )
}

export default Dashboard