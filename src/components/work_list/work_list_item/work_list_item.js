import React, {Component} from "react";

import './work_list_item.css'

export default class WorkListItem extends Component {
    constructor(props) {
        super(props)
    }


    render() {


        const {work} = this.props

        return (
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    {work}
                </span>
            </div>
        )
    }
}
