import React, {Component} from 'react';

import Spinner from "../spinner";

//Main class to render any list of elements
export default class ItemList extends Component {

    state = {
        itemList:null
    }

    //Function pattern
    componentDidMount() {
        //I catch setUP for HTTP request from app.js and set value to state
        const {getData} = this.props
        getData()
            .then(itemList => {
                this.setState({itemList})
            })
    }

    //Render Function Pattern
    renderItems(arr) {
        //I catch in props what exactly variables will be show in list
        return arr.map((item) => {
            const {id} = item
            const content = this.props.renderItem(item)
            return (
                <li key={id} className="list-group-item">
                    {content}
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
                    {this.props.label}
                </h1>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
}