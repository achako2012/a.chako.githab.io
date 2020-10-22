import React from "react";

import './cv.css'

const Education = ({university, faculty}) => {

    return (
        <>
            <h1 className="app-list">
                Education
            </h1>
            <div className="list-group">
                <span className="list-group-item">
                    <h4>
                    {faculty}
                </h4>
                <h5>
                    {university}
                </h5>
                </span>
            </div>
        </>
    )
}

export default Education;