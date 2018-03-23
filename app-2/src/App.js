import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      fableheim_heroes: ['Balthazar', 'Erdessanor', 'Galerian', 'Nymphatrina', 'Grizwelt', 'Samfrath']
    }
  }
  render() {

    const {fableheim_heroes} = this.state

    const heroList = fableheim_heroes.map( (e, i, arr) => (
      <div key={e}>
        <h2>{e}</h2>

      </div>
    ))
    // const heroList = this.state.fableheim_heroes.map( (e, i, arr) => (
    //   <div key={e}>
    //     <h2>{e}</h2>
    //   </div>
    // ))

    return (
      <div className="App">
        <h1>Ye Olde Heroes of Fableheim:</h1>
        {heroList}
      </div>
    );
  }
}

export default App;
