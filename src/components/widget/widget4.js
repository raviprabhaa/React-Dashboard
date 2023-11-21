import React from 'react';
import "./widget4.scss";


function Widget4({type}) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">4th LANE</span>
        <span className="counter">150</span>
        <span className="link">See the graph</span>
      </div>
      <div className="right">
        <div className="percentage">40%</div>
        <span className="time">Time :15s</span>
      </div>
    </div>

    
  )
}

export default Widget4;