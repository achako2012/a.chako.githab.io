import React, {Component} from 'react'
import AppHeader from "../app_header";
import WorkList from "../work_list";
import {Objective, Education, Interests, Languages} from "../cv";
import ItemList from "../item_list";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'

const config = require('../../server_imulation/config')

export default class App extends Component {


    render() {

        return (
            <Router>
                <div className="app">
                    <Route path='/cv'>
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
                    </Route>
                    <Route path='/about'>
                        <h1>About Me here</h1>
                    </Route>
                    <Route path='/blog'>
                        <h1>Blog here</h1>
                    </Route>
                </div>
            </Router>
        )
    }
}
