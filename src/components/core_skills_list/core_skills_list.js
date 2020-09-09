import React, {Component} from 'react';

import CoreSkillsItem from './core_skills_list_item'
import CvService from "../../services/CvService";
import Spinner from "../spinner";


export default class CoreSkills extends Component {

    cvService = new CvService()

    state = {
        skills: null
    }

    componentDidMount() {
        this.cvService.getSkills()
            .then(skills => {
                this.setState({skills})
            })
    }

    renderItems(skills) {
        return skills.map((item) => {
            const {id, ...skill} = item
            return (
                <li key={id} className="list-group-item">
                    <CoreSkillsItem {...skill}/>
                </li>
            )
        })
    }

    render() {

        const {skills} = this.state

        if(!skills) {
            return <Spinner/>
        }


        const items = this.renderItems(skills)

        return (
            <div>
                <h1 className="app-list">
                    Core Skills
                </h1>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
}
