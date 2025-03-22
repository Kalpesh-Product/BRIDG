import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='p-4'>
      <Outlet />
      
    </div>
  )
}

export default App
