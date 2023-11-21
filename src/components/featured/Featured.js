import React from 'react';
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



function Featured() {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total traffic on lane 1</h1>

        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={30} text={"30%"} strokeWidth={5}/>
            </div>
            <p className="title">Current Status:</p>
            <h4 className="time">Allocated Time:</h4>


        </div>

        

</div>


  )
}

export default Featured;
