import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      inventory: [
      '100 gold',
      'Dagger (2)',
      'Bo Staff (1)',
      'Composite Longbow (1)',
      'Healing Potion (5)',
      'Short Sword (1)',
      'Buckler (1)'
      ]

    }
  }
  render() {
    let { inventory } = this.state;

    let itemList = inventory.map( (val, i) => (
      <div key={ val }>
        <h2>{val}</h2>
      </div>
    ))

    return (
      <div className="App">
        <h1>Inventory:</h1>
        {itemList}
      </div>
    );
  }
}

export default App;
