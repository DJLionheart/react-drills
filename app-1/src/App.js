import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      message: ''
    }
  }

  handleText( e ){
    this.setState({
      message: e
    })

  }

  render() {
    return (
      <div className="App">
        <input type="text"
        onChange={ ( e ) => this.handleText( e.target.value )}
        value={this.state.message}/>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
