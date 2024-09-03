import React from 'react'
import './header.css'
import { FaYoutube } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Header() {
    return (
        <div className='header'>
            <div className="menu">
                <IoMenu className='icon'/>
            </div>
            <div className="youtube-logo">
                <FaYoutube className='icon' style={{paddingTop:"5px"}}/>
                <h4>Youtube</h4>
            </div>
            <div className="search">
                <input type="text" placeholder='search...' />
                <button><FaSearch style={{color:"white"}}/></button>
            </div>
            <div className="mic">
                <FaMicrophone className='icon'/>
            </div>
            <div className="video">
                <MdOutlineVideoCall className='icon'/>
            </div>
            <div className="notify">
            <IoIosNotifications className='icon'/>
            </div>
            <div className="login">
            <FaUserCircle className='icon'/>
            </div>
        </div>
    )
}

export default Header;
