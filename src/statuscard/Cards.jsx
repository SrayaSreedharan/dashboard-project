import React from 'react'
import '../App.css'

const Cards = ({ icon, title, value, color, unit ,withProgress }) => {
  return (
    <div className="cards">
      <div className="card-headers">
        {icon} <span>{title}</span>
      </div>
      <div className="card-value">
        {unit && <span className="unit-text"></span>}
        <span className={`value-text ${color}`}>{unit} {value}</span>
      </div>
      {withProgress && (
        <div className="progress-bar">
          <div className={`progress-fill ${color}`} />
        </div>
      )}
    </div>
  );
};

export default Cards
