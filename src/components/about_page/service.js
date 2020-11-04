import {IconContext} from "react-icons";
import {GiBigGear, GiComputing, GiJourney} from "react-icons/gi";
import {RiComputerFill} from "react-icons/ri";
import {FaGamepad} from "react-icons/fa";
import {BiDonateBlood} from "react-icons/bi";
import React from "react";
import './about.css'

export default function Service(){
    return(
        <section id="service-items">
            <div className="professional-skills">
                <div className="service-item">
                            <span>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                            <GiBigGear/>
                             </IconContext.Provider>
                            </span>
                    <h3>
                        Test Automation
                    </h3>
                    <p>
                        Using Javascript for Automation API or UI
                        Also I have experience with different selenium-based tools like Webdriver or WebdriverIO.
                    </p>

                </div>
                <div className="service-item">
                            <span>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                            <RiComputerFill/>
                             </IconContext.Provider>
                            </span>
                    <h3>
                        Manual Testing
                    </h3>
                    <p>
                        I have a lot of experience with manual testing - web-applications, web-sites, and APIs
                        Writing test cases, determining priority of bugs, using different test aproaches - pairwise testing, classes of equivalence, boundary testing and many other.
                    </p>

                </div>
                <div className="service-item">
                            <span>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                            <GiComputing/>
                             </IconContext.Provider>
                            </span>
                    <h3>
                        Learning
                    </h3>
                    <p>
                        To learn new my only desire. I always trying find new ways to resolve the problems.
                        Also I always open to share knowledge
                    </p>

                </div>
            </div>
            <div className="my-skills">
                <div className="service-item">
                            <span>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                            <FaGamepad/>
                             </IconContext.Provider>
                            </span>
                    <h3>
                        Gaming
                    </h3>
                    <p>
                        indie games; PS5 gamer
                    </p>
                </div>
                <div className="service-item">
                            <span>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                            <GiJourney/>
                             </IconContext.Provider>
                            </span>
                    <h3>
                        Traveling
                    </h3>
                    <p>
                        Every year I always have some journey.
                        This could either be concert of my favourite band or mounting climbing
                    </p>
                </div>
                <div className="service-item">
                            <span>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                            <BiDonateBlood/>
                             </IconContext.Provider>
                            </span>
                    <h3>
                        Volunteering
                    </h3>
                    <p>
                        3 years work in Ukrainian RedCross Society college was not wasted for me. Still loving take part of this actions
                    </p>
                </div>
            </div>
        </section>
    )
}