import React from 'react';

import CoreSkillsItem from './core_skills_list_item'

const CoreSkills = ({posts}) => {

    const elements = posts.map((item) => {
        const {id,...label} = item
        return(
            <li key={id} className="list-group-item">
                <CoreSkillsItem {...label}/>
            </li>
        )
    })

    return (
        <div>
            <h1 className="app-list">
                Core Skills
            </h1>
        <ul className="list-group">
            {elements}
        </ul>
        </div>
    )
}

export default CoreSkills