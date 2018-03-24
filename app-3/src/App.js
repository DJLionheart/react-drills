import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      trainerName: "Ash Ketcham",
      age: "Eternal Youth",
      hometown: "Pallet Town",
      rival: "Gary Oak",
      inventory: [
        'Pikachu',
        'Sandshrew',
        'Squirtle',
        'Growlithe',
        'Onyx',
        'Magmar',
        'Sentret',
        'Butterfree',
        'Arcainine',
        'Ivysaur',
        'Hitmonchan',
        'Entei',
        'Articuno',
        'Poliwrath'
      ],
      query: ''
    }
  }
  
  handleFilter(value) {
    this.setState({
      query: value,
    })
  }


  render() {
    const { inventory, query } = this.state;

    let filteredInventory = inventory.filter( (val, i) => {
      return val.includes( query );
    }).map((e, i) => (
      <div>
        <h2>{e}</h2>
      </div>
    ));

    
    return (
      <div className="App">
        <h1>Pokémon Inventory:</h1>
        <input type="text"
        onChange={ ( e ) => this.handleFilter(e.target.value)} value={this.state.query}/>
          {filteredInventory}
      </div>
    );
  }
}

export default App;
