import React, {Component} from 'react'
import AppHeader from "../app_header";
import WorkList from "../work_list";
import Objective from "../objective";
import Education from "../education";
import Interests from "../interests";
import Languages from "../languages";
import ItemList from "../item_list";
import './app.css'

const config = require('../../server_imulation/config')

export default class App extends Component {


    render() {

        return (
            <div className="app">
                <AppHeader/>
                <Objective label={config.objective}/>
                <ItemList label={'Core Skills'}
                          getData={config.skillList}
                          renderItem={({skill}) => `${skill}`}/>
                <WorkList getData={config.workList}/>
                <Education {...config.education}/>
                <ItemList label={'Trainings'}
                          getData={config.trainings}
                          renderItem={({school, training}) => `${school} - ${training}`}/>
                <Interests interests={config.interests}/>
                <Languages/>
            </div>
        )
    }
}
