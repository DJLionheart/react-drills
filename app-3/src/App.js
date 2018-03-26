import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['katsudon', 'oyakodon', 'sushi', 'katsu curry', 'udon', 'ramen'],
      userInput: ''
    }
  }

  handleInput( e ) {
    this.setState = ({
      userInput: e
    })
  }

  render() {
    let { list, userInput } = this.state;
    var filteredList = list.filter( (e, i) => list[i].includes(userInput)).map( e => (
      <div key={e}>
        <h2>{e}</h2>
      </div>
    ))

    return (
      <div className="App">
        <input type="text" onChange={ (e) => this.handleInput(e.target.value)}/>
        {filteredList}
      </div>
    );
  }
}

export default App;
