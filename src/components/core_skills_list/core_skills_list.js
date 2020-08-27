import React from 'react';

import CoreSkillsItem from './core_skills_list_item'

const CoreSkills = () => {
    return (
        <ul className="app-list list-group">
            <CoreSkillsItem/>
            <CoreSkillsItem/>
            <CoreSkillsItem/>
        </ul>
    )
}

export default CoreSkills