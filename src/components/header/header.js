import React, {useState} from 'react';

import {Link} from "react-router-dom";
import {FaLinkedinIn, FaTelegramPlane} from "react-icons/fa";
import {IconContext} from "react-icons";
import { VscGithub } from "react-icons/vsc";

import './header.css'


const Header = () => {

    return (
        <div className="header">
            <nav>
                <div>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <Link to="/cv">CV</Link>
                </div>
                <div className="social">
                    <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
                        <a href="https://www.linkedin.com/in/alexander-chako-907624154/">
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://github.com/achako2012?tab=repositories">
                            <VscGithub/>
                        </a>
                        <a href="https://telegram.me/AleksandrChako">
                            <FaTelegramPlane/>
                        </a>
                    </IconContext.Provider>
                </div>
            </nav>
        </div>
    );
}

export default Header;