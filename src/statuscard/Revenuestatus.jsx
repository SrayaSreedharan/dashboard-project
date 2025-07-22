import React from 'react';
import Cards from './Cards';
import '../App.css'
import { FaPaw } from 'react-icons/fa';
import { FaHourglassHalf } from 'react-icons/fa';
import { MdCheckCircleOutline } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa';
import { HiOutlineDocumentReport } from 'react-icons/hi';




const Revenuestatus = () => {
  const booking = [
    { icon: <FaPaw />, title: "Active", value: 100, color: "red" , withProgress:true },
    { icon:  <FaHourglassHalf />, title: "Pending", value: 60, color: "cyan", withProgress:true },
    { icon: <MdCheckCircleOutline />, title: "Completed", value: 90, color: "purple", withProgress:true },
  ];

  const revenue  = [
    { icon: <FaCoins />, title: "Total Income", value: 2354, color: "red", unit: "AED" },
    { icon:  <HiOutlineDocumentReport />, title: "Escrow Amount", value: 2354, color: "cyan", unit: "AED" },
    { icon: <FaCoins />, title: "This Month Revenue", value: 2354, color: "purple", unit: "AED" },
];

  return (
    <div className='containers'>
    <div className="Revenue-container">
      <div className="section">
        <h4>The Total Booking Count</h4>
        <div className="card-groups">
          {booking.map((item, i) => (
            <Cards key={i} {...item} />
          ))}
        </div>
      </div>

      <div className="section blue-bg">
        <h4>Revenue</h4>
        <div className="card-groups">
          {revenue.map((item, i) => (
            <Cards key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Revenuestatus;
