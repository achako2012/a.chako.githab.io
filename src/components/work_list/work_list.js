import React, {Component} from 'react';

import WorkListItem from './work_list_item'
import './work_list.css'
import Spinner from "../spinner";


export default class WorkList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props
        this.itemList = getData;
        this.setState({
            itemList: this.itemList
        });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, ...work} = item
            return (
                //Pattern #1, I use additional custom component to render work
                <li key={id} className="list-group-item">
                    <WorkListItem {...work}/>
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <div>
                <h1 className="app-list">
                    Work Experience
                </h1>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
}

