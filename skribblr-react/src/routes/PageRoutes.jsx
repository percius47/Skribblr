import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function PageRoutes() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default PageRoutes