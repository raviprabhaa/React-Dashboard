import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo"> Good Bye Traffic </span>
        </Link>
        
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className="icon"/>
            <span>
              Dashboard
            </span>
          </li>
          </Link>

          <p className="title">LIST</p>
          <Link to="/Junctions" style={{textDecoration:"none"}}>
          <li>
            <PersonIcon className="icon"/>
            <span>
              Junctions
            </span>
          </li>
          </Link>

          <li>
          
            <HistoryIcon className="icon"/>
            <span>
              History
            </span>
         
          </li>
          <p className="title">USEFUL</p>
          <li>
          <Link to="/Notification" style={{textDecoration:"none"}}>
            <NotificationsIcon className="icon"/>
            <span>
              Notifications
            </span>
            </Link>
          </li>

          <li>
          <Link to="/Control" style={{textDecoration:"none"}}>
            <PsychologyIcon className="icon"/>
            <span>
              Control Unit
            </span>
            </Link>
          </li>


          <p className="title">PERSONAL SETTINGS</p>
          <li>
            <SettingsIcon className="icon"/>
            <span>
              Settings
            </span>
          </li>


          
          <li>
          <Link to="/Profile" style={{textDecoration:"none"}}>
            <AccountCircleIcon className="icon"/>
            <span>
              Profile
            </span>
            </Link>
          </li>


          <li>
            <LogoutIcon className="icon"/>
            <span>
              Logout
            </span>
          </li>



        </ul>
        
        
        
        </div>
      <div className="bottom">
        <div className="colorOption"  
        onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" 
        onClick={() => dispatch({ type: "DARK" })}></div>
        

      </div>
    
    
    
    
    
    
    </div>
  )
}

export default Sidebar