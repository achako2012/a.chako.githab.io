import React, {Component} from 'react';

import CoreSkillsItem from './core_skills_list_item'
import CvService from "../../services/CvService";
import WorkListItem from "../work_list/work_list_item";


export default class CoreSkills extends Component{

    constructor(){
        super();
        this.updateWork()
    }

    cvService = new CvService()
    state = {
        skills:[]
    }

    updateWork(){
        this.cvService.getSkills()
            .then(arr =>{
                this.setState({skills: arr})})
    }

    render(){

        const {skills} = this.state
        const elements = skills.map((item) => {

            const {id, ...skill} = item;
            return (
                <li key={id} className="list-group-item">
                    <CoreSkillsItem {...skill}/>
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
}
