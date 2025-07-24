import React from 'react';
import Booking from './Booking';
import Revenue from './Revenue';
import Pending from './Pending';
import '../App.css'; // ⬅️ add this

const Lastdashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Booking />
      <Revenue />
      <Pending />
    </div>
  );
};

export default Lastdashboard;
