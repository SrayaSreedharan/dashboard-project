import React from "react";
import "../App.css";
import { FaPaw } from "react-icons/fa"; 

const Petcard = ({ type, count, revenue, image, bgColorClass,hasimg,iconclr}) => {
  return (
    <div className={`card ${bgColorClass}`}>

      <div className="card-content">
        <div className="card-header">
          <div className="icon-circle">
            <FaPaw style={{ color: iconclr, fontSize: "20px" }} />
        </div>
          <div>
            <h3 className="title">{type} Campaign Details</h3>
            <p className="subtitle">Search anything you want </p>
          </div>
        </div>
        <div className="counts">
          <div className="box">
            <p className="label">{type} Count</p>
            <h2 className="value1">{count}</h2>
          </div>
          <div className="box">
            <p className="label">Revenue Generated</p>
            <h2 className="value2">AED {revenue}</h2>
          </div>
        </div>
      </div>
       {hasimg && (
        <div className="card-image">
          <img src={image} alt={type} />
        </div>
      )}
    </div>
  );
};

export default Petcard;
