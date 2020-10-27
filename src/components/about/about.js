import React, {Component} from "react";

import './about.css'

export default class About extends Component {

    state = {}

    render() {
        return (
           <div className="about justify-content-between">
               <div>
                   <h1>About me info</h1>
               </div>
               <div>
                   <h1>
                       Photo here
                   </h1>
               </div>
           </div>
        )
    }
}