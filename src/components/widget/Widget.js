import React from 'react';
import "./widget.scss";


function Widget({type}) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">1st LANE</span>
        <span className="counter">517</span>
        <span className="link">See the graph</span>
        
      </div>
      <div className="right">
        <div className="percentage">30%</div>
        <span className="time">Time :15s</span>
      </div>
    </div>

    
  )
}

export default Widget;