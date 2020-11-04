import React from "react";

import './about.css'

export default function About()  {

        return (
                <section>
                    <div className="row">
                        <div id="text-main">
                            <h1>about me</h1>
                            <p className="intro">Software Development Engineer in Test</p>
                            <p>I enjoy turning complex problems into simple, and intuitive parts.
                                When I'm not coding or testing, you'll find me cooking, walking or reading
                                in the park.</p>
                        </div>
                        <div id="img-main">
                            <img src={process.env.PUBLIC_URL + '/img/photo.png'} alt='myPhotoAbout'/>
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
        )

}