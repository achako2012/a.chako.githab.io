import React from 'react'
import AppHeader from "../app_header";
import WorkList from "../work_list";
import Objective from "../objective";
import CoreSkills from "../core_skills_list";
import TrainingList from "../trainings_list";
import Education from "../education";
import Interests from "../interests";
import Languages from "../languages";

import './app.css'

const App = () => {

    const core = [
        {label:'Papuzh pauk'},
        {label:'Love with Bigdinka'},
        {label:'Budgies love me!'}
    ]

    const training = [
        {label:'How feed papuzka'},
        {label:'Delaniya smakolochkiv'}
    ]

    const work = [
        {label:'work with bigdinka'},
        {label:'work in Terrasoft'}
    ]



    return (
        <div className="app">
            <AppHeader/>
            <Objective/>
            <CoreSkills posts={core}/>
            <TrainingList posts={training}/>
            <Education/>
            <WorkList posts={work}/>
            <Interests/>
            <Languages/>
        </div>
        )
}

export default App;