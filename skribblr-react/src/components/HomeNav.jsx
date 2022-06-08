import React, { useState } from 'react'
import "./HomeNav.css"
import {NavLink, useLocation} from "react-router-dom"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useAuth } from '../contexts/authContext';
import { useNotes } from '../contexts/notesContext';
import SearchBar from './SearchBar';
// height 5rem
function HomeNav() {
  const { logoutHandler } = useAuth();
  const { setShowInput, setIsEditing, setInput, formInputs,notesOrder,setNotesOrder } =
  useNotes();
 
const [showFilterModal, setShowFilterModal] = useState(false);


const location = useLocation();

  return (

    <div className="home-nav">
    <div  >
  <NavLink to="/" className="logo-link">
     <h1 className='logo-title'>Skribblr.</h1>
     </NavLink>
      </div>
      
       <div className="search-box">
       <SearchBar  />
       </div>
       <div className="menu">
      <div className="filters">
        
      <input type="checkbox" id="click" style={{display:'none'}}/>

<label  for="click">
            <a ><TuneRoundedIcon className='menu-icon'/></a>
          </label>

        
        
            {/* modal content */}
            <div className="nav-modal __modal">
            <div className="close-div">
            <button
       
                  onClick={() =>
                    setNotesOrder(() => ({ sort: "", filter: "" }))
                  }
                >
                  Clear Filters
                </button>

       <div>
       <label  for="click" >
          <a ><CloseRoundedIcon/></a>
        </label>
       </div>
     </div>
        
                <p>Sort By</p>
           
                <div className="input-group" onClick={(e) => e.stopPropagation()}>
        <p className="txt-subtitle">Date</p>
        <label>
          <input
            type="radio"
            name="sort-date"
            value="latest"
            checked={notesOrder.sort === "latest"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          Latest first 
        </label>
        <label>
          <input
            type="radio"
            name="sort-date"
            value="oldest"
            checked={notesOrder.sort === "oldest"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          Oldest first
        </label>
        <p className="txt-subtitle">Priority</p>
        <label>
          <input
            type="radio"
            name="sort-priority"
            value="lowToHigh"
            checked={notesOrder.sort === "lowToHigh"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort-priority"
            value="highToLow"
            checked={notesOrder.sort === "highToLow"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          High to Low
        </label>
      </div>
                <p>Filter By</p>
            
                <div className="input-group" onClick={(e) => e.stopPropagation()}>
        <p className="txt-subtitle">Priority</p>
        <label>
          <input
            type="radio"
            name="priority"
            value="1"
            checked={notesOrder.filter.Low === "1"}
            onChange={(e) => {
              setNotesOrder({ ...notesOrder, filter: { Low: e.target.value } });
            }}
          />
          Low
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="2"
            checked={notesOrder.filter.Medium === "2"}
            onChange={(e) =>
              setNotesOrder({
                ...notesOrder,
                filter: { Medium: e.target.value },
              })
            }
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="3"
            checked={notesOrder.filter.High === "3"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, filter: { High: e.target.value } })
            }
          />
          High
        </label>
      </div>
              </div>
           
      
         
          <div class="modal__overlay"></div>
      </div>
      <LogoutIcon className='menu-icon' 
        onClick={logoutHandler}
        />
      </div>

    

      


</div>

  )
}

export default HomeNav