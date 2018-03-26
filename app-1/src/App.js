import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  handleInput( e ) {
    this.setState({
      message: e
    })
  }

  render() {
    var { message } = this.state;
    return (
      <div className="App">
        <input onChange={ (e) => this.handleInput( e.target.value )}
        value={message}/>
        <p>{message}</p>
      </div>
    );
  }
}

export default App;
