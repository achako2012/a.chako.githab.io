import React from 'react';

import TrainingListItem from "./training_list_item";

const TrainingList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...label} = item
        return(
            <li key={id} className="list-group-item">
                <TrainingListItem {...label} />
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