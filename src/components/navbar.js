import React from 'react';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import './navbar.css'

const Navbar= () => {
    return (
        <div className='sideNav'>
            <ul>
                <li><a href='#'><GoHome /></a></li>
                <li><a href='#'><SiYoutubeshorts /></a></li>
                <li><a href='#'><IoIosMusicalNotes /></a></li>
                <li><a href='#'><MdOutlineSubscriptions /></a></li>
                <li><a href='#'><MdDownload /></a></li>
                <li><a href='#'><IoMdSettings /></a></li>
            </ul>
        </div>
    )
}

export default Navbar;