import React, {useState} from 'react';

import './header.css'

const Header = () => {

    return (
        <div className="header">
            <div className="inner_header">
                <div className="navigation">
                    <div>
                        <a href="/components/">About</a>
                    </div>
                    <div>
                        <a href="https://github.com/reactstrap/reactstrap">CV</a>
                    </div>
                    <div>
                        <a href="https://github.com/reactstrap/reactstrap">Blog</a>
                    </div>
                </div>
                <div className="social">
                    <a href="/components/">Link</a>
                    <a href="/components/">Link</a>
                    <a href="/components/">Link</a>
                </div>
            </div>
        </div>
    );
}

export default Header;