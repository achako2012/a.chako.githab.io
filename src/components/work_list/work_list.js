import React, {Component} from 'react';

import WorkListItem from './work_list_item'
import './work_list.css'
import CvService from "../../services/CvService";



export default class WorkList extends Component {

    constructor(){
        super();
        this.updateWork()
    }

   cvService = new CvService()
    state = {
       posts:[]
    }

    updateWork(){
       this.cvService.getWork()
           .then(arr =>{
               this.setState({posts: arr})})
    }

    render() {
        const {posts} = this.state
        const elements = posts.map((item) => {

            const {id, ...work} = item;
            return (
                <li key={id} className="list-group-item">
                    <WorkListItem {...work}/>
                </li>
            )
        })

        return (
            <div>
                <h1 className="app-list">
                    Work Experience
                </h1>
                <ul className="list-group">
                    {elements}
                </ul>
            </div>
        )
    }
}

