import React from 'react';
import "./featured3.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured3() {
  return (
    <div className="featured3">
        <div className="top">
            <h1 className="title">Total traffic on lane 3</h1>

        </div>
        <div className="bottom">
            <div className="featuredChart3">
                <CircularProgressbar value={50} text={"50%"} strokeWidth={5}/>
            </div>
            <p className="title">Current Status:</p>
            <h4 className="time">Allocated Time:</h4>

        </div>
    </div>
  )
}

export default Featured3;
