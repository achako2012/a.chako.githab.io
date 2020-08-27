import React from "react";

import './work_list_item.css'

const WorkListItem = () => {
    return (
        <li className="list-group-item">
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    work experience!
                </span>
            </div>
        </li>
    )
}

export default WorkListItem