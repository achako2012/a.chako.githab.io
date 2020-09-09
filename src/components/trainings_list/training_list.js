import React, {Component} from 'react';

import TrainingListItem from "./training_list_item";
import CvService from "../../services/CvService";
import Spinner from "../spinner";


export default class TrainingList extends Component {

    cvService = new CvService()

    state = {
        trainings:null
    }

    componentDidMount() {
        this.cvService.getTrainings()
            .then(trainings => {
                this.setState({trainings})
            })
    }

    renderItems(trainings) {
        return trainings.map((item) => {
            const {id, ...training} = item
            return (
                <li key={id} className="list-group-item">
                    <TrainingListItem {...training}/>
                </li>
            )
        })
    }

    render(){

        const {trainings} = this.state

        if (!trainings) {
            return <Spinner/>
        }

        const items = this.renderItems(trainings)

        return (
            <div>
                <h1 className="app-list">
                    Training List
                </h1>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
}