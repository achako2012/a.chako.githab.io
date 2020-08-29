import React from "react";

const CoreSkillsItem = ({label}) => {
    return (
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    {label}
                </span>
            </div>
    )
}

export default CoreSkillsItem