import React from 'react';

import TrainingListItem from "./training_list_item";

const TrainingList = () => {
    return (
        <ul className="app-list list-group">
            <TrainingListItem/>
            <TrainingListItem/>
            <TrainingListItem/>
        </ul>
    )
}

export default TrainingList