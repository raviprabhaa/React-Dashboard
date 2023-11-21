import React from 'react';
import "./featured4.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured4() {
  return (
    <div className="featured4">
        <div className="top">
            <h1 className="title">Total traffic on lane 4</h1>

        </div>
        <div className="bottom">
            <div className="featuredChart4">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Current Status:</p>
            <h4 className="time">Allocated Time:</h4>

        </div>
    </div>
  )
}

export default Featured4;
