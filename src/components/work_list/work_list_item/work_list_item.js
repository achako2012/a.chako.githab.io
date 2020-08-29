import React from "react";

import './work_list_item.css'

const WorkListItem = ({label}) => {
    return (
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                   {label}
                </span>
            </div>
    )
}

export default WorkListItem