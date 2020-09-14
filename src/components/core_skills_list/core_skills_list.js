import React, {Component} from 'react';

import CoreSkillsItem from './core_skills_list_item'
import CvService from "../../services/CvService";
import Spinner from "../spinner";


export default class CoreSkills extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props
        getData()
            .then(itemList => {
                this.setState({itemList})
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, ...skill} = item
            return (
                <li key={id} className="list-group-item">
                    <CoreSkillsItem {...skill}/>
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state

        if(!itemList) {
            return <Spinner/>
        }


        const items = this.renderItems(itemList)

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
