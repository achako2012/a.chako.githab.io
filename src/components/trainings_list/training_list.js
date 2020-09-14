import React, {Component} from 'react';

import Spinner from "../spinner";

export default class TrainingList extends Component {

    state = {
        itemList:null
    }

    componentDidMount() {
        const {getData} = this.props
        getData()
            .then(itemList => {
                this.setState({itemList})
            })
    }

    //Render Function Pattern
    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item
            const training = this.props.renderItem(item)
            return (
                <li key={id} className="list-group-item">
                    {training}
                </li>
            )
        })
    }

    render(){

        const {itemList} = this.state

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

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