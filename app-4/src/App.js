import React, { Component } from 'react';
import Login from './Login.js'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      passWord: ''
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.logIn = this.logIn.bind(this);

  }

  handleUsername( e ) {
    this.setState({
      userName: e 
    })
  }

  handlePassword( e ) {
    this.setState({
      passWord: e 
    })
  }

  logIn() {
    let { userName, passWord } = this.state;
    alert(`Username: ${userName}, Password: ${passWord}` )
    this.setState({
      userName: '',
      passWord: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Login user={this.handleUsername}
        pass={this.handlePassword}
        log={this.logIn}/>
      </div>
    );
  }
}

export default App;
