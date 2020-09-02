import React, {Component} from "react";

export default class CoreSkillsItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {skill} = this.props

        return (
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    {skill}
                </span>
            </div>
        )
    }
}
