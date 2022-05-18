import React from 'react'
import "./HomeNav.css"
import {NavLink} from "react-router-dom"

import AddBoxIcon from '@mui/icons-material/AddBox';

import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../contexts/authContext';
import { useNotes } from '../contexts/notesContext';
// height 5rem
function HomeNav() {
  const { logoutHandler } = useAuth();
  const { setShowInput, setIsEditing, setInput, formInputs, setNotesOrder } =
  useNotes();
  return (

    <div className="home-nav">
    <div  >
  <NavLink to="/" className="logo-link">
     <h1 className='logo-title'>Skribblr.</h1>
     </NavLink>
      </div>
      <div className="home-menu">
        <AddBoxIcon className='menu-icon'
        onClick={()=>{
          setShowInput(true);
              setIsEditing(true);
            
              setInput(formInputs);}}
        />

        <LogoutIcon className='menu-icon' 
        onClick={logoutHandler}
        />

</div>
</div>

  )
}

export default HomeNav