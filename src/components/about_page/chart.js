import React from "react";
import './about.css'
export default function Chart() {

return(
        <section id="bar-chart">
            <div className="row">
                <div className="columns">
                    {/*<h2 className="skills-label">My Skills</h2>*/}
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
)
}

