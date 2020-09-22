import React, {Component} from 'react'
import AppHeader from "../app_header";
import WorkList from "../work_list";
import Objective from "../objective";
import Education from "../education";
import Interests from "../interests";
import Languages from "../languages";
import ItemList from "../item_list";
import './app.css'
import CvService from "../../services/CvService";

export default class App extends Component {

    cvService = new CvService()

    render() {

        const objective = 'QA Automation Engineer with Java and JS programming experience at Product or Outsource company with possibilities to improve QA Automation Engineer skills'

        const education = {
            university: 'Pryazovkiy State Technical University',
            faculty: 'Faculty Transport Technology, speciality Organization of International Transport'
        }

        const interests = 'music, active sport, travel'

        return (
            <div className="app">
                <AppHeader/>
                <Objective label={objective}/>
                {/*Function pattern*/}
                <ItemList label={'Core Skills'}
                          getData={this.cvService.getSkills}
                          // Render Function pattern
                          renderItem={({skill}) => `${skill}`}/>
                {/*Function pattern*/}
                <ItemList label={'Training List'}
                          getData={this.cvService.getTrainings}
                          // Render Function pattern
                          renderItem={({school, training}) => `${school} - ${training}`}/>
                <Education {...education}/>
                {/*Function pattern*/}
                <WorkList getData={this.cvService.getWork}/>
                <Interests interests={interests}/>
                <Languages/>
            </div>
        )
    }
}
