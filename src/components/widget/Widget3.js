import React from 'react';
import "./widget3.scss";


function Widget3({type}) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">3rd LANE</span>
        <span className="counter">100</span>
        <span className="link">See the graph</span>
      </div>
      <div className="right">
        <div className="percentage">25%</div>
        <span className="time">Time :15s</span>
      </div>
    </div>

    
  )
}

export default Widget3;