import React from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';

import ViewListIcon from '@mui/icons-material/ViewList';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


function Navbar() {
  const { dispatch } = useContext(DarkModeContext);


  return (
    <div className ='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.."/>
          <SearchIcon/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            English

          </div>

          <div className="item">
            <DarkModeIcon 
            className="icon"  
            onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="item">
            <FullscreenExitIcon className="icon"/>
          </div>

          <div className="item">
            <NotificationsIcon className="icon"/>
            <div className="counter">0</div>
          </div>

          

          <div className="item">
            <ViewListIcon className="icon"/>
          </div>

         


        </div>


      </div>
    </div>
  )
}

export default Navbar;