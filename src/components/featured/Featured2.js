import React from 'react';
import "./featured2.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured2() {
  return (
    <div className="featured2">
        <div className="top">
            <h1 className="title">Total traffic on lane 2</h1>

        </div>
        <div className="bottom">
            <div className="featuredChart2">
                <CircularProgressbar value={5} text={"5%"} strokeWidth={5}/>
            </div>
            <p className="title">Current Status:</p>
            <h4 className="time">Allocated Time:</h4>

        </div>
    </div>
  )
}

export default Featured2;
