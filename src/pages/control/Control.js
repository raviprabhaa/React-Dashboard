import React from 'react';
import "./control.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Radiosc from "./Radiosc";
import RadioPL from './RadioPL';
import Dropdown from '../../components/dropdown/Dropdown';




function Control() {
  return (
    <div className="control"> 
      <Sidebar/>
      <div className ="controlContainer">
        <Navbar/>
        <div className="contop">
          CONTROL UNIT
          <Dropdown/>
        </div>

        <div className="widgetW">

        <div className="widgetB">
          <div className="middel">
          <span className="title">SYSTEM CONTROL</span>
          <Radiosc/>
          </div>
         </div>


        <div className="widgetD">
          < div className="middelp">
          <span className="titlep">SELECT THE PRIORITY LANE</span>
          <RadioPL/>
          </div>
        </div>

         </div>

         <div className="bottomc"> 
          <button>SUBMIT</button>
         </div>
        
      
 

    
         
      </div>
    </div>

   
  )
}

export default Control;
