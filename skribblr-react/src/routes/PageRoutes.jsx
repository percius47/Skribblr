import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from '../pages/Welcome'

function PageRoutes() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Welcome/>}/>
        

      </Routes>
    </div>
  )
}

export default PageRoutes