import React from 'react';
import '../App.css';

const SidebarButton = ({ icon, label, active = false }) => {
  return (
    <div className={`sidebar-button ${active ? 'active' : ''}`}>
      <button className="label"><span className="icon">{icon}</span>{label}</button>
    </div>
  );
};

export default SidebarButton;
