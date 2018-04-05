import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'https://swapi.co/api'
const randomNum = Math.floor(Math.random() * 88) + 1;

class StarWarScreen extends Component {

    constructor() {
        super();
        this.state = {
            charName: '',
            birthYear: '',
            gender: '',
            eyeColor: '',
            hairColor: '',
            height: '',
            weight: '',
            skinColor: ''

        }
    }

    componentDidMount() {
        axios.get(`${baseUrl}/people/${ randomNum }`).then( res => {
            this.setState({
                charData: res.data
            });
        });

    }

    render() {
        return(
            <div>
                <h1>Star Wars Character Spotlight</h1>
                <hr/>
                <h2>Name: { this.state.charData.name }</h2>
                <h2>Birth Year: { this.state.charData.birth_year }</h2>
                <h2>Eye Color: { this.state.charData.eye_color }</h2> 
                <h2>Height (in cm) : { this.state.charData.height }</h2> 


            </div>
        )
    }
}

export default StarWarScreen;