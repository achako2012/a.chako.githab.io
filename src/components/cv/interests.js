import React from 'react'

import './cv.css'

const Interests = ({interests}) => {

    return (
        <>
            <h1 className="app-list">
                Interests
            </h1>
            <div className="list-group">
                <p className="list-group-item">
                    {interests}
                </p>
            </div>
        </>
    )
}

export default Interests;