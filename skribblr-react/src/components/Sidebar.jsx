import "./Sidebar.css";
import { NavLink } from "react-router-dom";


import HomeIcon from '@mui/icons-material/Home';
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';


const Sidebar = () => {







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
        
       
        </ul>

    
      </aside>
   
  );
};

export { Sidebar };
