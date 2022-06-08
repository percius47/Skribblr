import "./Sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { useNotes } from "../contexts/notesContext";
import { useState } from "react";
const Sidebar = () => {
  const { logoutHandler,user } = useAuth();

  const { setShowInput, setIsEditing, setInput, formInputs,notesOrder,setNotesOrder } =
  useNotes();
 
const [showFilterModal, setShowFilterModal] = useState(false);



const location = useLocation();

  return (

      <aside>
        <ul>
          <li>
            <NavLink
              to="/"
            
              activeClassName="active"
            >
             <HomeIcon   className="sidebar-icons"/> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/label"
              activeClassName="active"

            >
              <LabelIcon   className="sidebar-icons"/> <span>Labels</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/archive"
              activeClassName="active"
            >
             <ArchiveIcon   className="sidebar-icons"/> <span>Archived</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trash"
              activeClassName="active"
            >
         <DeleteIcon   className="sidebar-icons"/> <span>Trash</span>
            </NavLink>
          </li>
          {/* <div className="mobile-nav">
     <li       
     className="mobile-nav-container"
     activeClassName="active">  
 
<CategoryIcon className='side-nav-icons'
  onClick={() => {
    setShowFilterModal((show) => !show)}}
/>
<span>Sort/Filter</span>

</li>
{showFilterModal ? (
              <div className="nav-modal">
                <button
                  onClick={() =>
                    setNotesOrder(() => ({ sort: "", filter: "" }))
                  }
                >
                  Clear
                </button>
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
            ) : null} 
            <li
            className="mobile-nav-container"
                   activeClassName="active"
            >
        <AddBoxIcon
        
        className='side-nav-icons'
        onClick={()=>{
          setShowInput(true);
              setIsEditing(true);
            
              setInput(formInputs);}}
        />
        <span>New</span>
</li>
<li
className="mobile-nav-container"
       activeClassName="active"
>


        <LogoutIcon className='side-nav-icons' 
        onClick={logoutHandler}
        />
        <span>Logout</span>
</li>
</div> */}
       
        </ul>

        {/* <div className="profile">
        <PersonIcon className="user-icon"/>
        {user}
        </div> */}
      </aside>
   
  );
};

export { Sidebar };
