import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"
// height 5rem
function Navbar() {
  return (
    <div className="nav">
    <div className="nav-logo" >
  <NavLink to="/" className="logo-link">
     <h1 className='logo-title'>Skribblr.</h1>
     </NavLink>
      </div>

</div> 
  )
}

export default Navbar