import React from 'react';
import "./widget2.scss";


function Widget2({type}) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">2nd LANE</span>
        <span className="counter">50</span>
        <span className="link">See the graph</span>
      </div>
      <div className="right">
        <div className="percentage">5%</div>
        <span className="time">Time: 15s</span>
      </div>
    </div>

    
  )
}

export default Widget2;