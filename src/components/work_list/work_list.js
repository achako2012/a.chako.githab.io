import React, {Component} from 'react';

import WorkListItem from './work_list_item'
import './work_list.css'
import CvService from "../../services/CvService";
import Spinner from "../spinner";



export default class WorkList extends Component {

   cvService = new CvService()

    state = {
       works:null
    }

    componentDidMount() {
       this.cvService.getWork()
           .then(works => {
               this.setState({works})
           })
    }

    renderItems(works) {
       return works.map((item) => {
           const {id, ...work} = item
           return (
               <li key={id} className="list-group-item">
                   <WorkListItem {...work}/>
               </li>
           )
       })
    }


    render() {

        const {works} = this.state

        if(!works) {
            return <Spinner/>
        }

        const items = this.renderItems(works)

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

