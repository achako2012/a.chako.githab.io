import React, {Component} from "react";


import {RiStockFill, RiComputerFill} from "react-icons/ri";
import {IconContext} from "react-icons";
import {BiDonateBlood} from "react-icons/bi";
import {GiJourney, GiComputing, GiBigGear} from "react-icons/gi";
import {FaGamepad} from "react-icons/fa";


import './about.css'

export default class About extends Component {

    state = {}

    render() {
        return (
            <>
                <section>
                    <div className="row">
                        <div id="text-main">
                            <h1>about me</h1>
                            <p>Software Development Engineer in Test</p>
                            <p>I enjoy turning complex problems into simple, and intuitive parts.
                                When I'm not coding or testing, you'll find me cooking, walking or reading
                                in the park.</p>
                        </div>
                        <div id="img-main">
                            <img src={process.env.PUBLIC_URL + '/img/photo2.png'} alt='myPhotoAbout'/>
                        </div>
                    </div>
                    <div id="snaps" className="snaps">
                        <img src={process.env.PUBLIC_URL + '/img/snap1.jpeg'} alt='snap1'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap2.jpeg'} alt='snap2'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap3.jpeg'} alt='snap3'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap4.jpeg'} alt='snap4'/>
                        <img src={process.env.PUBLIC_URL + '/img/snap5.jpeg'} alt='snap5'/>
                    </div>
                </section>
                <div id="content-detail">
                    <section id="bar-chart">
                        <div className="row">
                            <div className="columns">
                                <h2 className="skills-label">My Skills</h2>
                                <ul className="bar-chart">
                                    <li className="axis">
                                        <div className="label">Jedi</div>
                                        <div className="label">Ninja</div>
                                        <div className="label">Geek</div>
                                        <div className="label">Budgie</div>
                                    </li>
                                    <li className="aqua">
                                        <div className="percent">90<span>%</span></div>
                                        <div className="skill">Coffee drinking</div>
                                    </li>
                                    <li className="pink">
                                        <div className="percent">80<span>%</span></div>
                                        <div className="skill">Testing</div>
                                    </li>
                                    <li className="yellow">
                                        <div className="percent">90<span>%</span></div>
                                        <div className="skill">Learning</div>
                                    </li>
                                    <li className="brown">
                                        <div className="percent">65<span>%</span></div>
                                        <div className="skill">Eating pizza</div>
                                    </li>
                                    <li className="red">
                                        <div className="percent">40<span>%</span></div>
                                        <div className="skill">Coding</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="service-items">
                        <div className="professional-skills">
                            <div className="service-item">
                            <span>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                            <GiBigGear/>
                             </IconContext.Provider>
                            </span>
                                <h3>
                                    Test Automation
                                </h3>
                                <p>
                                    Some text here
                                </p>

                            </div>
                            <div className="service-item">
                            <span>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                            <RiComputerFill/>
                             </IconContext.Provider>
                            </span>
                                <h3>
                                    Manual Testing
                                </h3>
                                <p>
                                    Some text here
                                </p>

                            </div>
                            <div className="service-item">
                            <span>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                            <GiComputing/>
                             </IconContext.Provider>
                            </span>
                                <h3>
                                    Learning
                                </h3>
                                <p>
                                    Some text here
                                </p>

                            </div>
                        </div>
                        <div className="my-skills">
                            <div className="service-item">
                            <span>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                            <FaGamepad/>
                             </IconContext.Provider>
                            </span>
                                <h3>
                                    Gaming
                                </h3>
                                <p>
                                    Some text here
                                </p>

                            </div>
                            <div className="service-item">
                            <span>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                            <GiJourney/>
                             </IconContext.Provider>
                            </span>
                                <h3>
                                    Traveling
                                </h3>
                                <p>
                                    Some text here
                                </p>

                            </div>
                            <div className="service-item">
                            <span>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                            <BiDonateBlood/>
                             </IconContext.Provider>
                            </span>
                                <h3>
                                    Volunteering
                                </h3>
                                <p>
                                    Some text here
                                </p>

                            </div>
                        </div>
                    </section>
                </div>
            </>

        )
    }
}