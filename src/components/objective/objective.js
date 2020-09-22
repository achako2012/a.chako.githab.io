import React from 'react';

import './objective.css'

const Objective = ({label}) => {
    return (
        <>
            <h1 className='app-list'>
                Objective
            </h1>
            <div className="list-group">
                <p className="list-group-item">
                    {label}
                </p>
            </div>
        </>
    )
}

export default Objective