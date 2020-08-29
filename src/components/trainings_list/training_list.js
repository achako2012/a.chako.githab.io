import React from 'react';

import TrainingListItem from "./training_list_item";

const TrainingList = ({posts}) => {

    const elements = posts.map((item) => {
        return(
            <li className="list-group-item">
                <TrainingListItem
                    label={item.label}/>
            </li>
        )
    })

    return (
        <div>
            <h1 className="app-list">
                Training List
            </h1>
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    )
}

export default TrainingList