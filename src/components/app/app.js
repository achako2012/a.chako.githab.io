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
        {label:'Papuzh pauk', id:'123sqas'},
        {label:'Love with Bigdinka', id:'mbnj121'},
        {label:'Budgies love me!', id:'hjh56212s'}
    ]

    const training = [
        {label:'How feed papuzka', id:'gjy12jyu'},
        {label:'Delaniya smakolochkiv', id:'fgh54h'}
    ]

    const work = [
        {label:'work with bigdinka', id:'gfh4456'},
        {label:'work in Terrasoft', id:'fh4hf45'}
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