import React from "react";

import './education.css'

const Education = ({university, faculty}) => {

    return (
        <>
            <h1 className="app-list">
                Educaition
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