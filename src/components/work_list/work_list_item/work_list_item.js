import React, {Component} from "react";

import './work_list_item.css'

export default class WorkListItem extends Component {
    constructor(props) {
        super(props)
    }

    renderItems(arr) {
        return arr.map((item) => {
            return (
                <li>
                    {item}
                </li>
            )
        })
    }

    render() {
        const {company, date, position, responsobilities} = this.props
        const duties = responsobilities.split(';')
        const items = this.renderItems(duties)

        return (
            <div className="app-list-item">
                <div className="d-flex justify-content-between">
                    <h4>{company}</h4>
                    <h4>{date}</h4>
                </div>
                <div>
                    <h5>{position}</h5>
                </div>
                <ul className="app-list-item-label">
                    {items}
                </ul>
            </div>
        )
    }
}
