import React from 'react';
import "./notification.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


function Notification() {
  return (
    <div className="noti"> 
      <Sidebar/>
      <div className ="notiContainer">
        <Navbar/> 
        <div className="notititle">
        <h5>NOTIFICATIONS</h5>
        </div>

        <div className="widgetN">
        <div className="middelN">
        <span className="title">Alarms</span>
        
         </div>
         </div>

        
      </div>
    </div>

   
  )
}

export default Notification;