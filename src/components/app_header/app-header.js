import React from "react";

import './app_header.css'

const AppHeader = () => {
    return (
        <div className="app_header justify-content-between">
            <img src={process.env.PUBLIC_URL + '/img/photo.png'} alt='myPhoto'></img>
            <div className="contact-content">
                <h1>Alexander Chako</h1>
                <div className="justify-content-between">
                    <p>Phone : +380982829279</p>
                    <p>E-mail : a.chako2012@gmail.com</p>
                </div>
                <div className="links">
                    <a href="https://github.com/achako2012" target="_blank" rel="nofollow">
                        GitHub Profile
                    </a>
                </div>
                <div className="links">
                    <a href="https://www.linkedin.com/in/alexander-chako-907624154/" target="_blank" rel="nofollow">
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AppHeader