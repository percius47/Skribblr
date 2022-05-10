import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"
// height 5rem
function Navbar() {
  return (
    <div className="nav">
    <div className="nav-logo" >
  <NavLink to="/">
     <h1>Skribblr.</h1>
     </NavLink>

     
    </div>

</div>
  )
}

export default Navbar