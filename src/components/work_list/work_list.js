import React from 'react';

import WorkListItem from './work_list_item'
import './work_list.css'

const WorkList = ({posts}) => {

    const elements = posts.map((item) => {
        const{id,...label}=item;
        return(
            <li key={id} className="list-group-item">
                <WorkListItem {...label}/>
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