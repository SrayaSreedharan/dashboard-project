import React from 'react';
import '../App.css';
import SidebarButton from './SidebarButton';
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";

const Sidebar = () => {

    const Data = [
    { icon: <SlCalender />, label: "Calendar" ,isButton: true },
    { icon: <CgProfile />, label: "My Profile" },
    { icon: <MdOutlineShoppingBag />, label: "Booking" },
    { icon: <MdOutlineMarkChatUnread />, label: "Chat" },
    { icon:<BiSupport />, label: "Support" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-button">
        <span className="logo-text">Logo</span>
        <div className="half left-half"></div>
        <div className="half right-half"></div>
      </div>
      <div className="sidebar-buttons">
        {Data.map((item, index) =>
          item.isButton ? (
            <SidebarButton
              key={index}
              icon={item.icon}
              label={item.label}
              active
            />
          ) : (
            <div key={index} className="sidebar-text-item">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </div>
          )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
