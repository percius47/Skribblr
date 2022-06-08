import React from 'react'
import "../App.css"
import { Navigate, Route, Routes } from 'react-router-dom'

import HomeNav from '../components/HomeNav'
import { Sidebar } from '../components/Sidebar'
import { useAuth } from '../contexts/authContext'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { PrivateRoute } from './PrivateRoutes'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Trash } from '../pages/Trash'
import { Label } from '../pages/Label'
import { Archive } from '../pages/Archive'
import { useNotes } from '../contexts/notesContext'
function PageRoutes() {
  const { isAuth } = useAuth();
  const {
   
   setShowInput, setIsEditing, setInput, formInputs,
  } = useNotes();
  return (
    <div>
    {!isAuth ? (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    ) : (
      <div className="page-wrapper">
        <AddCircleRoundedIcon sx={{fontSize:50}} className='addnotes-icon'
        onClick={()=>{
          setShowInput(true);
              setIsEditing(true);
            
              setInput(formInputs);}}
        />
        <HomeNav />

        <section className="main-section">
          <Sidebar />

          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/label"
              element={
                <PrivateRoute>
                  <Label />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/archive"
              element={
                <PrivateRoute>
                  <Archive />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/trash"
              element={
                <PrivateRoute>
                  <Trash />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </section>
    
      </div>
    )}
  </div>
  )
}

export default PageRoutes