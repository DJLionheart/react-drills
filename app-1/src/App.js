import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      textBox: ''
    }
  }

  updateTextBox(value){
    this.setState({
      textBox: value
    })

  }

  render() {
    return (
      <div className="App">
        <input type="text"
        onChange={ ( e ) => this.updateTextBox(e.target.value)}
        value={this.state.textBox}/>
        <p>{this.state.textBox}</p>
      </div>
    );
  }
}

export default App;
