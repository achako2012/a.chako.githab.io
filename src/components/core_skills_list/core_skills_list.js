import React from 'react';

import CoreSkillsItem from './core_skills_list_item'

const CoreSkills = ({posts}) => {

    const elements = posts.map((item) => {
        return(
            <li className="list-group-item">
                <CoreSkillsItem
                    label={item.label}/>
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