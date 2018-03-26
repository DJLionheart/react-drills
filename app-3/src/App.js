import React, { Component } from 'react';
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
    var filteredList = list.filter( (e, i) => e.includes(userInput)).map( (e, i) => (
      <div key={i}>
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
