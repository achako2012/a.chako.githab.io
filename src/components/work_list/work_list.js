import React from 'react';

import WorkListItem from './work_list_item'
import './work_list.css'

const WorkList = ({posts}) => {

    const elements = posts.map((item) => {
        return(
            <li className="list-group-item">
                <WorkListItem
                    label={item.label}/>
            </li>
        )
    })


    return (
        <div>
            <h1 className="app-list">
                Work Experience
            </h1>
            <ul className="list-group">
                {elements}
            </ul>
        </div>

    )
}

export default WorkList