import React from 'react';
import '../App.css';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineMarkChatUnread } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import Sidebar from './Sidebar';
import profile from '../images/profilepic.jpg'
import Footer from './Footer';

const Navbar = () => {
 
  return (
    <>
    <div className='container'>
    <Sidebar/>
    <header className="header">
      <div className="welcome-text">Hi Alaxander</div>
      <div className="header-icons">
        <IoMdNotificationsOutline className="icon" />
        <MdOutlineMarkChatUnread className="icon" />
        <FiSettings className="icon" />
        <img src={profile} alt="profile" className="profile-pic"/>
      </div>
    </header>
    </div>
    <Footer/>
    </>
  );
};

export default Navbar
