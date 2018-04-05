import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const baseUrl = 'https://swapi.co/api'
const randomNum = Math.floor(Math.random() * 88) + 1;

class App extends Component {
  constructor() {
    super();
    this.state = {
        charData: {}

    }
}

componentDidMount() {
    axios.get(`${baseUrl}/people/${ randomNum }`).then( res => {
        console.log(res);
        
        this.setState({
            charData: res.data
        });
    });

}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>May the Force be with you...</h2>
        </div>
        <div>
          <h1>Star Wars Character Spotlight</h1>
          <hr/>
          <h2>Name: { this.state.charData.name }</h2>
          <h2>Birth Year: { this.state.charData.birth_year }</h2>
          <h2>Eye Color: { this.state.charData.eye_color }</h2> 
          <h2>Height (in cm) : { this.state.charData.height }</h2> 
        </div>
      </div>
    );
  }
}

export default App;
