import React from "react";

const TrainingListItem = ({label}) => {
    return (
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    {label}
                </span>
            </div>
    )
}

export default TrainingListItem