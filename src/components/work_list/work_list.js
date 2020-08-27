import React from 'react';

import WorkListItem from './work_list_item'
import './work_list.css'

const WorkList = () => {
    return (
        <ul className="app-list list-group">
            <WorkListItem/>
            <WorkListItem/>
            <WorkListItem/>
        </ul>
    )
}

export default WorkList